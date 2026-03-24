import { get_favourite_videos_body_schema } from "./get-favourite-videos.body.schema";
import get_favourite_videos_function from "./get-favourite-videos.function";
import { get_favourite_videos_query_schema } from "./get-favourite-videos.query.schema";
import { get_favourite_videos_tests } from "./get-favourite-videos.test";
import { z } from "zod";

export let get_favourite_videos_details = {
    module: 'Favourite',  // User → Favourite
    api_name: 'Get Favourite Videos',
    api_description: 'User ke favourite videos fetch karo',
    method: 'get',
    path: '/favourite/get-favourite-videos',
    query_schema: z.object(get_favourite_videos_query_schema).strict(),
    body_schema: z.object(get_favourite_videos_body_schema).strict(),
    execution_function: get_favourite_videos_function,
    tests: get_favourite_videos_tests,
    roles: ['User', 'Admin']  // Public → User, Admin
}