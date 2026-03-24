# Video Feedback API

1. Exercise video ya session complete hone ke baad user feedback submit karta hai
2. Rating (1-5 stars) aur adjustments array leta hai
3. DB mein VideoFeedback table mein save karta hai

### Fields
- `video_id` — number (optional) — Kis video ka feedback hai
- `session_id` — string (optional) — Kis session ka feedback hai
- `rating` — number (1-5) — Star rating
- `adjustments` — string[] — `easier`, `harder`, `shorter`, `longer`, `change` mein se koi bhi

> **Note:** `video_id` ya `session_id` mein se kam se kam ek dena zaroori hai

### Test Cases
1. video_id + rating + adjustments → 201 Feedback submitted successfully - Done
2. session_id + rating + adjustments → 201 - Done
3. Dono (video_id + session_id) + rating → 201 - Done
4. Dono missing (na video_id na session_id) → 400 - Done
5. rating 0 ya 6 → 400 Validation Error - Done
6. Invalid adjustment value → 400 Validation Error - Done

### Internal Work
- `video_feedback` table mein record create hota hai
- `video_id` aur `session_id` dono nullable hain
- `adjustments` JSON string ke roop mein store hote hain
