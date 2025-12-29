import { Error_Interface } from "@config/interfaces/error.interface"
import { add_country_function_params, add_country_function_return } from "./add-country.interface"
import { Transaction } from "sequelize"
import { Country } from "@src/models/country.model"
import { add_generic_master } from "@config/common/generic-create-function"

let add_country_function = async (data: add_country_function_params, transaction: Transaction): Promise<add_country_function_return | Error_Interface> => {
    try {
        return await add_generic_master({ data, transaction, model: Country, bulk_key: "bulk_upload", unique_keys: ["name", "code"] });
    } catch (error: any) {
        return { code: 400, message: error.message };
    }
}

export default add_country_function