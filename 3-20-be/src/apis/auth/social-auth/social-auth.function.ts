import { Error_Interface } from "@config/interfaces/error.interface"
import { social_auth_function_params, social_auth_function_return } from "./social-auth.interface"
import { Transaction } from "sequelize"
import { User } from "@src/models/user.model"
import jwt from "jsonwebtoken"

let social_auth_function = async (data: social_auth_function_params, transaction: Transaction): Promise<social_auth_function_return | Error_Interface> => {
    try {
        const provider_id_key = `${data.provider}_id`;

        // Step 1: Social ID se user dhundo
        const userBySocialId = await User.findOne({
            where: { [provider_id_key]: data.provider_id },
            transaction
        });

        if (userBySocialId) {
            const { password, ...userWithoutPassword } = userBySocialId.toJSON();
            const token = jwt.sign(
                { id: userWithoutPassword.id, email: userWithoutPassword.email },
                process.env.JWT_SECRET as string,
                { expiresIn: '7d' }
            );
            return {
                code: 200,
                message: 'Login successful',
                data: { user: userWithoutPassword, token }
            };
        }

        // Step 2: Email se dhundo — sirf tab jab email aaya ho
        if (data.email) {
            const userByEmail = await User.findOne({
                where: { email: data.email },
                transaction
            });

            if (userByEmail) {
                await userByEmail.update(
                    { [provider_id_key]: data.provider_id },
                    { transaction }
                );
                const { password, ...userWithoutPassword } = userByEmail.toJSON();
                const token = jwt.sign(
                    { id: userWithoutPassword.id, email: userWithoutPassword.email },
                    process.env.JWT_SECRET as string,
                    { expiresIn: '7d' }
                );
                return {
                    code: 200,
                    message: 'Account linked & login successful',
                    data: { user: userWithoutPassword, token }
                };
            }
        }

        // Step 3: Bilkul naya user create karo
        const newUser = await User.create({
            name: data.name || null,
            email: data.email || null,
            [provider_id_key]: data.provider_id,
            profile_picture: data.profile_picture || null,
            password: null
        }, { transaction });

        const { password, ...userWithoutPassword } = newUser.toJSON();
        const token = jwt.sign(
            { id: userWithoutPassword.id, email: userWithoutPassword.email },
            process.env.JWT_SECRET as string,
            { expiresIn: '7d' }
        );

        return {
            code: 201,
            message: 'Registered successfully',
            data: { user: userWithoutPassword, token }
        };

    } catch (error: any) {
        console.log('Social Auth Error: ', error);
        return { code: 400, message: error.message || 'Error in Social Auth Function' }
    }
}

export default social_auth_function