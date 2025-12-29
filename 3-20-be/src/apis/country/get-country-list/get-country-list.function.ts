import { Error_Interface } from "@config/interfaces/error.interface"
import { get_country_list_function_params, get_country_list_function_return } from "./get-country-list.interface"
import { Transaction } from "sequelize"
import { Country } from "@src/models/country.model";
import { build_query_options } from "@config/common/generic-build-query";

let get_country_list_function = async (data: get_country_list_function_params, transaction: Transaction): Promise<get_country_list_function_return | Error_Interface> => {
    try {
        const { pagination, order, filter } = build_query_options({ data, sort_fields: ["name", "code"], search_fields: ["name", "code"] });

        let country = await Country.findAndCountAll({
            where: filter, order,
            attributes: ['id', 'name', 'code', 'status', 'is_active'],
            ...pagination, transaction, raw: true, nest: true
        })
        if (country.count == 0) {
            return { code: 200, message: 'No Countries Found!', count: country.count, data: [] }
        }
        return { code: 200, message: 'Countries Fetched Successfully', count: country.count, data: country.rows }
    } catch (error: any) {
        throw error;
    }
}

export default get_country_list_function