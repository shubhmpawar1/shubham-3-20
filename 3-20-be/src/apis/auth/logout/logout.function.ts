import { Error_Interface } from "@config/interfaces/error.interface"
import { logout_function_params, logout_function_return } from "./logout.interface"
import { Transaction } from "sequelize"
// import { redis } from "@src/setup/redis"

let logout_function = async (data: logout_function_params, transaction: Transaction, req?: any): Promise<logout_function_return | Error_Interface> => {
    try {
        // Token ko blacklist mein daalo
        // const token = req?.headers?.authorization?.split(' ')[1];
        // if (token) {
        //     await redis.set(`blacklist:${token}`, '1', 'EX', 7 * 24 * 60 * 60); // 7 days
        // }

        return {
            code: 200,
            message: 'Logged out successfully'
        }

    } catch (error: any) {
        return { code: 400, message: error.message || 'Error in Logout Function' }
    }
}

export default logout_function