import { Error_Interface } from "@config/interfaces/error.interface"
import { register_function_params, register_function_return } from "./register.interface"
import { Transaction } from "sequelize"
import { User } from "@src/models/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

let register_function = async (data: register_function_params, transaction: Transaction): Promise<register_function_return | Error_Interface> => {
    try {
        // 1. Email already exist karta hai?
        const existingUser = await User.findOne({
            where: { email: data.email },
            transaction
        });

        if (existingUser) {
            return { code: 400, message: 'Email already exists' };
        }

        // 2. Password hash karo
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // 3. Naya user create karo
        const newUser = await User.create({
            name: data.name,
            email: data.email,
            password: hashedPassword,
        }, { transaction });

        // 4. JWT token generate karo
        const { password, ...userWithoutPassword } = newUser.toJSON();
        const token = jwt.sign(
            { id: newUser.get('id'), email: newUser.get('email') },
            process.env.JWT_SECRET as string,
            { expiresIn: '7d' }
        );

        return {
            code: 201,
            message: 'Registered successfully',
            data: { user: userWithoutPassword, token }
        };

    } catch (error: any) {
        return { code: 400, message: error.message || 'Error in Register Function' }
    }
}

export default register_function