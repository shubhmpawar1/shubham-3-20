import { delete_video_note_body_schema } from "./delete-video-note.body.schema";
import delete_video_note_function from "./delete-video-note.function";
import { delete_video_note_query_schema } from "./delete-video-note.query.schema";
import { delete_video_note_tests } from "./delete-video-note.test";
import { z } from "zod";

export let delete_video_note_details = {
    module: 'Notes',
    api_name: 'Delete Video Note',
    api_description: 'Video ka note delete karo',
    method: 'post',
    path: '/notes/delete-video-note',
    query_schema: z.object(delete_video_note_query_schema).strict(),
    body_schema: z.object(delete_video_note_body_schema).strict(),
    execution_function: delete_video_note_function,
    tests: delete_video_note_tests,
    roles: ['User', 'Admin']
}