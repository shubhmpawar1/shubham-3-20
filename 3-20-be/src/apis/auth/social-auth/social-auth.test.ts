import { social_auth_tests_interface } from "./social-auth.interface";

export let social_auth_tests: social_auth_tests_interface[] = [
  {
    name: 'Best Case',
    input: {
      provider: 'google',
      provider_id: '123456789',
      name: 'John Doe'
    },
    check_output: (input, output) => { },
  }
];
