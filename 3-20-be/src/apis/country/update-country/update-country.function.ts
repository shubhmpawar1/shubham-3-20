import { Error_Interface } from "@config/interfaces/error.interface"
import { update_country_function_params, update_country_function_return } from "./update-country.interface"
import { Transaction } from "sequelize"
import { Country } from "@src/models/country.model"
import { check_if_record_linked } from "@config/common/check-linked-record"
import { to_title_case, to_upper_case } from "@config/common/generic-create-function"
import { check_unique_record } from "@config/common/check-unique-function"

let update_country_function = async (data: update_country_function_params, transaction: Transaction): Promise<update_country_function_return | Error_Interface> => {
    try {
        const { id, ...update_data } = data;
        if (!id) { return { code: 400, message: "Country ID is required for update." } }

        if (update_data?.name) { update_data.name = to_title_case(update_data.name) }
        if (update_data?.code) { update_data.code = to_upper_case(update_data.code) }

        const unique_error = await check_unique_record({ model: Country, model_name: "Country", unique_keys: ["name", "code"], is_bulk: false, single_data: { id, ...update_data }, transaction });
        if (unique_error) return unique_error;

        if (update_data.is_active === false) {
            const is_linked = await check_if_record_linked({ id, model: Country, transaction, });
            if (is_linked) {
                return { code: 400, message: "Can't Deactive because this Country is Linked" };
            }
        }
        await Country.update(update_data, { where: { id }, transaction, returning: true })
        return { code: 200, message: 'Country Updated Successfully.' };
    } catch (error) {
        throw error
    }
}

export default update_country_function