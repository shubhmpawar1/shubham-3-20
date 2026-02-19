import { register_tests_interface } from "./register.interface";

export let register_tests: register_tests_interface[] = [
  {
    name: 'Best Case',
    input: {
      name: 'John Doe',
      email: "",
      password: ""
    },
    check_output: (input, output) => { },
  }
];
