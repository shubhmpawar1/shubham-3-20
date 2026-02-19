import { Op, Transaction } from "sequelize";
import { Error_Interface } from "@config/interfaces/error.interface";

type unique_key = string | string[];
interface check_unique_params { model: any; model_name?: string; unique_keys: unique_key[]; is_bulk: boolean; single_data?: any; bulk_data?: any[]; transaction: Transaction; }

export const check_unique_record = async ({ model, model_name = "Record", unique_keys, is_bulk, single_data, bulk_data, transaction, }: check_unique_params): Promise<Error_Interface | null> => {
    try {
        if (!unique_keys?.length) return null;

        const format_fields = (keys: unique_key[]) => keys.map(k => Array.isArray(k) ? k.map(i => i.replace(/_/g, " ").toUpperCase()).join(" + ") : k.replace(/_/g, " ").toUpperCase()).join(" or ");

        if (!is_bulk && single_data) {
            const or_conditions: any[] = [];

            for (const key of unique_keys) {
                if (Array.isArray(key)) {
                    if (key.every(k => is_valid_value(single_data[k]))) {
                        const and_obj: any = {};
                        key.forEach(k => (and_obj[k] = single_data[k]));
                        or_conditions.push(and_obj);
                    }
                } else {
                    if (is_valid_value(single_data[key])) {
                        or_conditions.push({ [key]: single_data[key] });
                    }
                }
            }

            if (!or_conditions.length) return null;

            const where: any = { [Op.or]: or_conditions, };

            if (single_data.id) { where.id = { [Op.ne]: single_data.id }; }

            const existing = await model.findOne({ where, raw: true, transaction, });
            if (existing) {
                return { code: 400, message: `${model_name} already exists with same ${format_fields(unique_keys)}.`, };
            }
        }

        if (is_bulk && Array.isArray(bulk_data)) {
            const or_conditions: any[] = [];
            const exclude_ids: number[] = [];

            for (const key of unique_keys) {
                const seen = new Set<string>();

                for (const item of bulk_data) {
                    const value = Array.isArray(key) ? key.map(k => item[k]).join("|") : item[key];
                    if (!is_valid_value(value)) continue;

                    if (seen.has(String(value))) {
                        return { code: 400, message: `Duplicate ${Array.isArray(key) ? key.join(" + ") : key} found in bulk data.`, };
                    }
                    seen.add(String(value));
                }
            }

            bulk_data.forEach(item => {
                if (item.id) exclude_ids.push(item.id);

                unique_keys.forEach(key => {
                    if (Array.isArray(key)) {
                        if (key.every(k => is_valid_value(item[k]))) {
                            const and_obj: any = {};
                            key.forEach(k => (and_obj[k] = item[k]));
                            or_conditions.push(and_obj);
                        }
                    } else {
                        if (is_valid_value(item[key])) {
                            or_conditions.push({ [key]: item[key] });
                        }
                    }
                });
            });
            if (!or_conditions.length) return null;

            const where: any = { [Op.or]: or_conditions, };
            if (exclude_ids.length) { where.id = { [Op.notIn]: exclude_ids }; }

            const existing_records = await model.findAll({ where, raw: true, transaction, });
            if (existing_records.length) {
                return { code: 400, message: `${model_name} already exists with same ${format_fields(unique_keys)}.`, };
            }
        }
        return null;
    } catch (error: any) {
        console.error(error.message);
        throw error;
    }
};

const is_valid_value = (val: any) => val !== undefined && val !== null && (typeof val === "string" || typeof val === "number") && val !== "";
