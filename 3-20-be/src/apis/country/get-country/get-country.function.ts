import { Error_Interface } from "@config/interfaces/error.interface"
import { get_country_function_params, get_country_function_return } from "./get-country.interface"
import { Transaction } from "sequelize"
import { Country } from "@src/models/country.model"

let get_country_function = async (data: get_country_function_params, transaction: Transaction): Promise<get_country_function_return | Error_Interface> => {
    try {
        let country = await Country.findOne({ where: { id: data.id }, transaction, raw: true, nest: true })
        if (!country) {
            return { code: 200, message: `Country with Id ${data.id} not found!` }
        }
        return { code: 200, message: 'Country fetched Successfully', data: country }
    } catch (error: any) {
        console.log(error.message);
        throw error;
    }
}

export default get_country_function