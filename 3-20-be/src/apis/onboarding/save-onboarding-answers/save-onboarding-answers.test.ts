import { save_onboarding_answers_tests_interface } from "./save-onboarding-answers.interface";

export let save_onboarding_answers_tests: save_onboarding_answers_tests_interface[] = [
  {
    name: 'Best Case',
    input: {
      user_id: 1,
      answers: {
        "1": [1, 2],
        "2": [3]
      }
    },
    check_output: (input, output) => { },
  }
];
