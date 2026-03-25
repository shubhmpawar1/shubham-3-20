import { Error_Interface } from "@config/interfaces/error.interface"
import { get_quick_facts_function_params, get_quick_facts_function_return } from "./get-quick-facts.interface"
import { Transaction, literal } from "sequelize"
import { QuickFact } from "@src/models/quick-fact.model";

let get_quick_facts_function = async (data: get_quick_facts_function_params, transaction: Transaction): Promise<get_quick_facts_function_return | Error_Interface> => {
    try {
        let quick_facts = await QuickFact.findAndCountAll({
            order: literal('RANDOM()'),
            attributes: ['id', 'fact', 'source', 'createdAt', 'updatedAt'],
            limit: 10,
            transaction, raw: true, nest: true
        })

        if (quick_facts.count == 0) {
            return { code: 200, message: 'No Quick Facts Found!', count: quick_facts.count, data: [] }
        }

        return { code: 200, message: 'Quick Facts Fetched Successfully', count: quick_facts.count, data: quick_facts.rows }
    } catch (error: any) {
        throw error;
    }
}

export default get_quick_facts_function