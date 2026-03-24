import { save_video_note_body_schema } from "./save-video-note.body.schema";
import save_video_note_function from "./save-video-note.function";
import { save_video_note_query_schema } from "./save-video-note.query.schema";
import { save_video_note_tests } from "./save-video-note.test";
import { z } from "zod";

export let save_video_note_details = {
    module: 'Notes',
    api_name: 'Save Video Note',
    api_description: 'Video ka note save karo',
    method: 'post',
    path: '/notes/save-video-note',
    query_schema: z.object(save_video_note_query_schema).strict(),
    body_schema: z.object(save_video_note_body_schema).strict(),
    execution_function: save_video_note_function,
    tests: save_video_note_tests,
    roles: ['User', 'Admin']
}