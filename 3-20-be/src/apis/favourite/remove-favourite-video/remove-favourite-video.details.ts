import { remove_favourite_video_body_schema } from "./remove-favourite-video.body.schema";
import remove_favourite_video_function from "./remove-favourite-video.function";
import { remove_favourite_video_query_schema } from "./remove-favourite-video.query.schema";
import { remove_favourite_video_tests } from "./remove-favourite-video.test";
import { z } from "zod";

export let remove_favourite_video_details = {
    module: 'Favourite',
    api_name: 'Remove Favourite Video',
    api_description: 'Video ko user ke favourites se remove karo',
    method: 'post',
    path: '/favourite/remove-favourite-video',
    query_schema: z.object(remove_favourite_video_query_schema).strict(),
    body_schema: z.object(remove_favourite_video_body_schema).strict(),
    execution_function: remove_favourite_video_function,
    tests: remove_favourite_video_tests,
    roles: ['User', 'Admin']
}
