import { edit_video_note_body_schema } from "./edit-video-note.body.schema";
import edit_video_note_function from "./edit-video-note.function";
import { edit_video_note_query_schema } from "./edit-video-note.query.schema";
import { edit_video_note_tests } from "./edit-video-note.test";
import { z } from "zod";

export let edit_video_note_details = {
    module: 'Notes',
    api_name: 'Edit Video Note',
    api_description: 'Video ka note edit karo',
    method: 'post',
    path: '/notes/edit-video-note',
    query_schema: z.object(edit_video_note_query_schema).strict(),
    body_schema: z.object(edit_video_note_body_schema).strict(),
    execution_function: edit_video_note_function,
    tests: edit_video_note_tests,
    roles: ['User', 'Admin']
}