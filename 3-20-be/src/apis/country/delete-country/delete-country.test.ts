import { delete_country_tests_interface } from "./delete-country.interface";

export let delete_country_tests: delete_country_tests_interface[] = [
  {
    name: 'Country Foreign Key Constraint Delete Case',
    input: {
      id: 1
    },
    check_output: (input, output) => {
      return output.code == 409
    },
  },
  {
    name: 'Country Delete Case',
    input: {
      id: 1
    },
    check_output: (input, output) => {
      return output.code == 200
    },
  }
];
