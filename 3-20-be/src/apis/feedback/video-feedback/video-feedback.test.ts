import { video_feedback_tests_interface } from "./video-feedback.interface";

export let video_feedback_tests: video_feedback_tests_interface[] = [
    {
        name: 'Best Case - Video feedback with adjustments',
        input: {
            video_id: 1,
            rating: 4,
            adjustments: ['easier', 'shorter'],
        },
        check_output: (input, output) => { },
    },
    {
        name: 'Best Case - Session feedback with adjustments',
        input: {
            session_id: 'abc-123',
            rating: 5,
            adjustments: ['harder'],
        },
        check_output: (input, output) => { },
    },
    {
        name: 'Best Case - Dono saath, no adjustments',
        input: {
            video_id: 1,
            session_id: 'abc-123',
            rating: 3,
            adjustments: [],
        },
        check_output: (input, output) => { },
    },
    {
        name: 'Error Case - Dono missing',
        input: {
            rating: 4,
            adjustments: [],
        },
        check_output: (input, output) => { },
    }
];
