import { video_feedback_body_schema } from "./video-feedback.body.schema";
import video_feedback_function from "./video-feedback.function";
import { video_feedback_query_schema } from "./video-feedback.query.schema";
import { video_feedback_tests } from "./video-feedback.test";
import { z } from "zod";

export let video_feedback_details = {
    module: 'Feedback',
    api_name: 'Video Feedback',
    api_description: 'Exercise video ke baad user ka feedback save karo — rating (1-5) aur adjustments',
    method: 'post',
    path: '/feedback/video-feedback',
    query_schema: z.object(video_feedback_query_schema).strict(),
    body_schema: z.object(video_feedback_body_schema).strict(),
    execution_function: video_feedback_function,
    tests: video_feedback_tests,
    roles: ['User', 'Admin']
}
