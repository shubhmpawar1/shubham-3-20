import { Error_Interface } from "@config/interfaces/error.interface"
import { user_function_params, user_function_return } from "./user.interface"
import { Transaction } from "sequelize"

let user_function = async (data: user_function_params, transaction: Transaction): Promise<user_function_return | Error_Interface> => {
    return {
        code: 200,
        message: 'User Successful'
    }
}

export default user_function