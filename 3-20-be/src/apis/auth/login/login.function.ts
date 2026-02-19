import { Error_Interface } from "@config/interfaces/error.interface"
import { login_function_params, login_function_return } from "./login.interface"
import { Transaction } from "sequelize"
import { User } from "@src/models/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

let login_function = async (data: login_function_params, transaction: Transaction): Promise<login_function_return | Error_Interface> => {
    try {
        // 1. Email exist karta hai?
        const existingUser = await User.findOne({
            where: { email: data.email },
            transaction
        });

        if (!existingUser) {
            return { code: 400, message: 'User not found' };
        }

        // 2. Password match karo
        const userJson = existingUser.toJSON();
        const isPasswordValid = await bcrypt.compare(data.password, userJson.password);

        if (!isPasswordValid) {
            return { code: 400, message: 'Invalid password' };
        }

        // 3. JWT token generate karo
        const { password, ...userWithoutPassword } = userJson;
        const token = jwt.sign(
            { id: userJson.id, email: userJson.email },
            process.env.JWT_SECRET as string,
            { expiresIn: '7d' }
        );

        return {
            code: 200,
            message: 'Login successful',
            data: { user: userWithoutPassword, token }
        };

    } catch (error: any) {
        return { code: 400, message: error.message || 'Error in Login Function' }
    }
}

export default login_function