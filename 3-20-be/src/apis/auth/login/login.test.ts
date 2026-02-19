import { login_tests_interface } from "./login.interface";

export let login_tests: login_tests_interface[] = [
  {
    name: 'Best Case',
    input: {
      name: 'John Doe'
    },
    check_output: (input, output) => { },
  }
];
