import { Error_Interface } from "@config/interfaces/error.interface"
import { delete_country_function_params, delete_country_function_return } from "./delete-country.interface"
import { Transaction } from "sequelize"
import { Country } from "@src/models/country.model"
import { delete_generic_master } from "@config/common/generic-delete-function"

let delete_country_function = async (data: delete_country_function_params, transaction: Transaction): Promise<delete_country_function_return | Error_Interface> => {
    try {
        return await delete_generic_master({ id: data.id, transaction, model: Country, model_name: "Country" });
    } catch (error: any) {
        return { code: 400, message: error.message }
    }
}

export default delete_country_function