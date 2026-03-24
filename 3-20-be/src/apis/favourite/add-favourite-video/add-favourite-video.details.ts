import { add_favourite_video_body_schema } from "./add-favourite-video.body.schema";
import add_favourite_video_function from "./add-favourite-video.function";
import { add_favourite_video_query_schema } from "./add-favourite-video.query.schema";
import { add_favourite_video_tests } from "./add-favourite-video.test";
import { z } from "zod";

export let add_favourite_video_details = {
    module: 'Favourite',
    api_name: 'Add Favourite Video',
    api_description: 'Video ko user ke favourites mein add karo',
    method: 'post',
    path: '/favourite/add-favourite-video',
    query_schema: z.object(add_favourite_video_query_schema).strict(),
    body_schema: z.object(add_favourite_video_body_schema).strict(),
    execution_function: add_favourite_video_function,
    tests: add_favourite_video_tests,
    roles: ['User', 'Admin']
}
