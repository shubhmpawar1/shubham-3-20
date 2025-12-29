import { sequelize } from "@src/setup/sequelize";
import { ForeignKeyConstraintError } from "sequelize";

export let test_function = async (tests: any[], execution_function: any) => {
    let transaction = await sequelize.transaction();
    try {
        let counter = 1
        for (let test of tests) {
            try {
                let output: any = await execution_function(test.input, transaction)
                let check_output = await test.check_output(test.input, output)
                if (!check_output) {
                    throw { test, output: output }
                }
            } catch (error: any) {
                if (error instanceof ForeignKeyConstraintError) {
                    await transaction.rollback();
                    return {
                        code: 409,
                        message: "Foreign key constraint error: " + error.message,
                    }
                }
                throw error;
            }
        }
        await transaction.rollback();

    } catch (error: any) {
        console.error('Error in test : ', error.test.name)
        await transaction.rollback();
        throw error;
    }
}