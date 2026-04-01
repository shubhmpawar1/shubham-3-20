import { add_video_history_body_schema } from "./add-video-history.body.schema";
import add_video_history_function from "./add-video-history.function";
import { add_video_history_query_schema } from "./add-video-history.query.schema";
import { add_video_history_tests } from "./add-video-history.test";
import { z } from "zod";

export let add_video_history_details = {
    module: 'Video',
    api_name: 'Add Video History',
    api_description: 'Add Video History Description',
    method: 'post',
    path: '/history/add-video-history',
    query_schema: z.object(add_video_history_query_schema).strict(),
    body_schema: z.object(add_video_history_body_schema).strict(),
    execution_function: add_video_history_function,
    tests: add_video_history_tests,
    roles: ['Public']
}