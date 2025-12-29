import { api_list } from "@src/setup/api-list";
import { test_function } from "./test-function";

export let run_tests = async () => {
    try {
        if (process.env.RUN_TESTS === 'TRUE') {
            return;
        }
        for (let api of api_list) {
            await test_function(api.tests, api.execution_function)
        }
    } catch (error) {
        process.exit()
    }

};