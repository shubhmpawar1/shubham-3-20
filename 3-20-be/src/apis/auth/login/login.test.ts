import { login_tests_interface } from "./login.interface";

export let login_tests: login_tests_interface[] = [
  {
    name: 'Best Case',
    input: {
      email: 'john.doe@example.com',
      password: 'password123'
    },
    check_output: (input, output) => { },
  }
];
