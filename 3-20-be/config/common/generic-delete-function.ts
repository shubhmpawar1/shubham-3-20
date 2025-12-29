import { Transaction } from "sequelize";
import { Error_Interface } from "@config/interfaces/error.interface";
import { check_if_record_linked } from "./check-linked-record";

interface generic_delete_params { id: any | string; transaction: Transaction; model: any; model_name?: string; }
interface generic_delete_return { code: number; message: string; }

export const delete_generic_master = async ({ id, transaction, model, model_name, }: generic_delete_params): Promise<generic_delete_return | Error_Interface> => {
    try {
        const name = model_name || model?.name || "Record";
        const where_condition = model_name === "Student" ? { user_id: id } : { id };
        const record = await model.findOne({ where: where_condition, transaction });
        if (!record) {
            return { code: 400, message: `${name} with Id ${id} not found!` };
        }
        const is_linked = await check_if_record_linked({ id, model, transaction, });
        if (is_linked) {
            return { code: 400, message: `You cannot delete this record as it is already linked to other masters` };
        }
        await model.destroy({ where: where_condition, transaction });
        return { code: 200, message: `Record deleted successfully` };
    } catch (error: any) {
        console.error(error.message);
        return { code: 400, message: error?.message || "Something went wrong", };
    }
};