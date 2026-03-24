import { edit_video_note_tests_interface } from "./edit-video-note.interface";

export let edit_video_note_tests: edit_video_note_tests_interface[] = [
    {
        name: 'Best Case',
        input: {
            user: { id: 1 },
            note_id: 1,
            note: 'Updated note text here.'
        },
        check_output: (input, output) => { },
    }
];