import { remove_favourite_video_tests_interface } from "./remove-favourite-video.interface";

export let remove_favourite_video_tests: remove_favourite_video_tests_interface[] = [
    {
        name: 'Best Case - Video removed from favourites',
        input: {
            video_id: 1,
        },
        check_output: (input, output) => { },
    },
    {
        name: 'Error Case - Video not in favourites',
        input: {
            video_id: 99,
        },
        check_output: (input, output) => { },
    }
];
