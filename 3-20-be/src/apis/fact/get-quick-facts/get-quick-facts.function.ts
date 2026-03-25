import { Error_Interface } from "@config/interfaces/error.interface"
import { get_quick_facts_function_params, get_quick_facts_function_return } from "./get-quick-facts.interface"
import { Transaction } from "sequelize"
import { QuickFact } from "@src/models/quick-fact.model";
import { build_query_options } from "@config/common/generic-build-query";

let get_quick_facts_function = async (data: get_quick_facts_function_params, transaction: Transaction): Promise<get_quick_facts_function_return | Error_Interface> => {
    try {
        const { pagination, order, filter } = build_query_options({ data, sort_fields: ["fact", "source"], search_fields: ["fact", "source"] });

        let quick_facts = await QuickFact.findAndCountAll({
            where: filter, order,
            attributes: ['id', 'fact', 'source', 'created_at', 'updated_at'],
            ...pagination, transaction, raw: true, nest: true
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