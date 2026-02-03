import { Error_Interface } from "@config/interfaces/error.interface"
import { add_user_function_params, add_user_function_return } from "./add-user.interface"
import { Transaction } from "sequelize"
import { User } from "@src/models/user.model"

let add_user_function = async (data: add_user_function_params, transaction: Transaction): Promise<add_user_function_return | Error_Interface> => {
    try {
        transaction = '' as any
        let result = await User.create({ name: data.name, email: data.email }, { transaction })
        return { code: 200, data: result, message: 'Add User Successful' }
    } catch (error: any) {
        console.log('Error in Add User Function : ', error);
        return { code: 400, message: error.message || 'Error in Add User Function' }
    }
}

export default add_user_function