import { Transaction } from "sequelize";
import { Error_Interface } from "@config/interfaces/error.interface";
import { check_unique_record } from "./check-unique-function";

type unique_key = string | string[];
interface generic_params { data: any; transaction: Transaction; model: any; bulk_key: string; unique_keys?: unique_key[]; }
interface generic_return { code: number; message: string; data?: any; }

export const add_generic_master = async ({ data, transaction, model, bulk_key, unique_keys = [], }: generic_params): Promise<generic_return | Error_Interface> => {
    try {
        const model_name = model?.name || "Record";
        const { [bulk_key]: bulk_data, ...single_data } = data;

        const is_bulk: any = Array.isArray(bulk_data) && bulk_data.length > 0;

        if (!is_bulk) {
            if (single_data?.name) { single_data.name = to_title_case(single_data.name); }
            if (single_data?.code) { single_data.code = to_upper_case(single_data.code); }
        }

        if (is_bulk) {
            bulk_data.forEach((item: any) => {
                if (item?.name) { item.name = to_title_case(item.name); }
                if (item?.code) { item.code = to_upper_case(item.code); }
            });
        }

        const unique_error = await check_unique_record({ model, transaction, unique_keys, is_bulk, single_data, bulk_data, model_name, });
        if (unique_error) { return unique_error }

        if (is_bulk) {
            const result = await model.bulkCreate(bulk_data, { transaction });
            return { code: 200, message: `Bulk ${model_name} Added Successfully.`, data: result };
        }

        const result = await model.create(single_data, { transaction });
        return { code: 200, message: `${model_name} Added Successfully.`, data: result };

    } catch (error: any) {
        console.error(error);
        return { code: 400, message: error?.message || "Something went wrong" };
    }
};

export const to_title_case = (value: string) => {
    if (!value || typeof value !== "string") return value;

    const trimmed = value.trim();
    if (trimmed === trimmed.toUpperCase()) return trimmed;

    return trimmed.toLowerCase().split(/\s+/).map(word => {
        if (word === "user") return "User";
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
};

export const to_upper_case = (value: string) => {
    if (!value || typeof value !== "string") return value;
    return value.trim().toUpperCase();
};