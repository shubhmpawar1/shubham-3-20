import { Transaction } from "sequelize";

interface check_linked_params { id: any; model: any; transaction: Transaction; }

export const check_if_record_linked = async ({ id, model, transaction, }: check_linked_params): Promise<boolean> => {
    const associations = model.associations || {};

    for (const key of Object.keys(associations)) {
        const association = associations[key];

        if (["HasMany", "HasOne"].includes(association.associationType)) {
            const target_model = association.target;
            const foreignKey = association.foreignKey;

            const linked_record = await target_model.findOne({ where: { [foreignKey]: id }, transaction, });
            if (linked_record) {
                return true;
            }
        }
    }
    return false;
};
