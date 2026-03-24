# Add Favourite Video API

1. User kisi video ko favourite mein add karta hai
2. Agar video already favourite mein hai to 400 return karta hai
3. `favourite_videos` table mein record create hota hai

### Fields
- `video_id` — number — Kis video ko favourite karna hai

### Test Cases
1. Valid video_id → 201 Video added to favourites - Done
2. Already favourite → 400 Video already in favourites - Done
3. Bina token → 401 Unauthorized - Done

### Internal Work
- `FavouriteVideo` model use hota hai
- Pehle check karta hai ki already exist karta hai ya nahi
