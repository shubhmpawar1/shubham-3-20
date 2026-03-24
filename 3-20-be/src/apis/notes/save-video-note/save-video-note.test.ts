import { save_video_note_tests_interface } from "./save-video-note.interface";

export let save_video_note_tests: save_video_note_tests_interface[] = [
  {
    name: 'Best Case',
    input: {
      user: { id: 1 },
      video_id: 1,
      note: 'This exercise helped my knee pain.'
    },
    check_output: (input, output) => { },
  }
];