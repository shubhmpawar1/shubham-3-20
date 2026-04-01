import { add_video_history_tests_interface } from "./add-video-history.interface";

export let add_video_history_tests: add_video_history_tests_interface[] = [
  {
    name: 'Best Case - with session and status',
    input: {
      user_id: 1,
      video_id: 1,
      session_id: 1,
      status: 'completed'
    },
    check_output: (input, output) => { },
  },
  {
    name: 'Best Case - without optional fields',
    input: {
      user_id: 1,
      video_id: 2,
    },
    check_output: (input, output) => { },
  },
  {
    name: 'Invalid user_id',
    input: {
      user_id: 99999,
      video_id: 1,
    },
    check_output: (input, output) => { },
  },
  {
    name: 'Invalid video_id',
    input: {
      user_id: 1,
      video_id: 99999,
    },
    check_output: (input, output) => { },
  },
];