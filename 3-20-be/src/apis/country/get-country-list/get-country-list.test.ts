import { get_country_list_tests_interface } from "./get-country-list.interface";

export let get_country_list_tests: get_country_list_tests_interface[] = [
  {
    name: 'Country List Case',
    input: {},
    check_output: (input, output) => { 
      return output.code == 200
    },
  }
];
