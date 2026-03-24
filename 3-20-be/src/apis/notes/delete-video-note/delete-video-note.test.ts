import { delete_video_note_tests_interface } from "./delete-video-note.interface";

export let delete_video_note_tests: delete_video_note_tests_interface[] = [
    {
        name: 'Best Case',
        input: {
            user: { id: 1 },
            note_id: 1,
        },
        check_output: (input, output) => { },
    }
];