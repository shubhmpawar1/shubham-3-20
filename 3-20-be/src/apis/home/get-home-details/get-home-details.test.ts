import { get_home_details_tests_interface } from "./get-home-details.interface";

export let get_home_details_tests: get_home_details_tests_interface[] = [
  {
    name: 'Home Details - Week',
    input: { user: { id: 1 }, filter: 'Week' },
    check_output: (input, output) => {
      return output.code == 200
    },
  },
  {
    name: 'Home Details - Month',
    input: { user: { id: 1 }, filter: 'Month' },
    check_output: (input, output) => {
      return output.code == 200
    },
  }
];