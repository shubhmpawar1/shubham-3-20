import { get_country_tests_interface } from "./get-country.interface";

export let get_country_tests: get_country_tests_interface[] = [
  {
    name: 'Country Get Case',
    input: {
      id: 1
    },
    check_output: (input, output) => { 
      return input.id == output.data.id
    },
  }
];
