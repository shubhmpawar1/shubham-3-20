import { update_country_tests_interface } from "./update-country.interface";

export let update_country_tests: update_country_tests_interface[] = [
  {
    name: 'Country Update Case',
    input: {
      id: 1
    },
    check_output: (input, output) => { 
      return input.id == output.data.id
    },
  }
];
