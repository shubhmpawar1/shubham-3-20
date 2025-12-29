import { add_country_tests_interface } from "./add-country.interface";

export let add_country_tests: add_country_tests_interface[] = [
  {
    name: 'Country Add Case',
    input: {
      name: 'IndiaA'
    },
    check_output: (input, output) => {
      return input.name == output.data.name
    }
  }
];
