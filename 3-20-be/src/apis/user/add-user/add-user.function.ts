import { Error_Interface } from "@config/interfaces/error.interface"
import { add_user_function_params, add_user_function_return } from "./add-user.interface"
import { Transaction, Op } from "sequelize"
import { User } from "@src/models/user.model"
import bcrypt from "bcrypt"
import { add_generic_master } from "@config/common/generic-create-function"

let add_user_function = async (data: add_user_function_params, transaction: Transaction): Promise<add_user_function_return | Error_Interface> => {
    try {
        const socialConditions: any[] = [];
        if (data.google_id) socialConditions.push({ google_id: data.google_id });
        if (data.apple_id) socialConditions.push({ apple_id: data.apple_id });
        if (data.microsoft_id) socialConditions.push({ microsoft_id: data.microsoft_id });
        if (data.facebook_id) socialConditions.push({ facebook_id: data.facebook_id });
        if (data.email) socialConditions.push({ email: data.email });

        const whereCondition = socialConditions.length > 0
            ? { [Op.or]: socialConditions }
            : { name: data.name };

        const existingUser = await User.findOne({
            where: whereCondition,
            transaction
        });


        if (existingUser) {
            const { password, ...userWithoutPassword } = existingUser.toJSON();
            return { code: 200, message: 'User already exists', data: userWithoutPassword };
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        return await add_generic_master({
            data: { ...data, password: hashedPassword },
            transaction,
            model: User,
            bulk_key: "users",
            unique_keys: ["name", "email", "apple_id", "google_id", "microsoft_id", "facebook_id"]
        });

    } catch (error: any) {
        return { code: 400, message: error.message || 'Error in Add User Function' }
    }
}

export default add_user_function 
