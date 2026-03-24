import { get_favourite_videos_tests_interface } from "./get-favourite-videos.interface";

export let get_favourite_videos_tests: get_favourite_videos_tests_interface[] = [
  {
    name: 'Best Case',
    input: {
      user: { id: 1 },
      page: 1,
      page_size: 10,
      sort_by: 'createdAt',
      sort_order: 'DESC'
    },
    check_output: (input, output) => { },
  }
];