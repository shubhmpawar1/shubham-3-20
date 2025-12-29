import { Op } from "sequelize";

interface QueryHelperParams { data: any; sort_fields?: string[]; search_fields?: string[]; default_page_size?: number; }
interface QueryHelperResult { pagination: { offset: number; limit: number }; order: any[]; filter: any; }

export const build_query_options = ({ data, sort_fields = [], search_fields = [], default_page_size = 10, }: QueryHelperParams): QueryHelperResult => {
    try {
        const filter: any = {};

        const page = Number(data.page) > 0 ? Number(data.page) : 1;
        const page_size = Number(data.page_size) > 0 ? Number(data.page_size) : default_page_size;
        const pagination = { offset: (page - 1) * page_size, limit: page_size };

        const order: any[] = [];
        order.push(["updatedAt", "DESC"]);
        if (data.sort_by && sort_fields.includes(data.sort_by)) {
            order.push([data.sort_by, data.sort_order?.toUpperCase() === "DESC" ? "DESC" : "ASC"]);
        }

        if (data.is_active !== undefined) { filter.is_active = data.is_active === true || data.is_active === "true" }
        if (data.search && search_fields.length > 0) {
            filter[Op.or] = search_fields.map((field) => ({ [field]: { [Op.iLike]: `%${data.search}%` }, }));
        }
        return { pagination, order, filter };
    } catch (error) {
        throw error
    }
};
