# Add Video History Api

1. Takes `video_id` in body (required), along with optional `session_id` and `status`
2. Requires authenticated user (`user_id` extracted from JWT token)
3. Records the user's video watch activity in the `user_video_history` table
4. Returns the created history record if successful

### Test Cases

1. If `user_id` and `video_id` are valid -> Should create and return history record - Done
2. If `user_id` does not exist -> Should return User not found error - Done
3. If `video_id` does not exist -> Should return Video not found error - Done
4. If `video_id` is not provided -> Should return validation error - Done
5. If `session_id` is not provided -> Should default to null - Done
6. If `status` is not provided -> Should default to 'completed' - Done

### Internal Work
- `user_id` is extracted from the authenticated JWT token (not from request body)
- `session_id` is optional and links the activity to a specific session
- `status` defaults to `'completed'` if not provided; allowed values: `completed`, `in_progress`, `skipped`
- `createdAt` and `updatedAt` are set automatically by the database