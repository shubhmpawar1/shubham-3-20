import { add_favourite_video_tests_interface } from "./add-favourite-video.interface";

export let add_favourite_video_tests: add_favourite_video_tests_interface[] = [
    {
        name: 'Best Case - Video added to favourites',
        input: {
            video_id: 1,
        },
        check_output: (input, output) => { },
    },
    {
        name: 'Error Case - Already in favourites',
        input: {
            video_id: 1,
        },
        check_output: (input, output) => { },
    }
];
