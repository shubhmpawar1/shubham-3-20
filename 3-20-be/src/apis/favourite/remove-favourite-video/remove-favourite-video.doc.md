# Remove Favourite Video API

1. User kisi video ko favourites se remove karta hai
2. Agar video favourites mein nahi hai to 400 return karta hai
3. `favourite_videos` table se record delete hota hai

### Fields
- `video_id` — number — Kis video ko remove karna hai

### Test Cases
1. Valid video_id jo favourites mein hai → 200 Video removed from favourites - Done
2. Video favourites mein nahi → 400 Video not found in favourites - Done
3. Bina token → 401 Unauthorized - Done

### Internal Work
- `FavouriteVideo` model use hota hai
- Pehle check karta hai ki record exist karta hai ya nahi
- `destroy()` se record delete hota hai
