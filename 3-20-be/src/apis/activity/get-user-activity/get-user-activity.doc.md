# Get User Activity API

## Overview
User activity screen ke liye API jo daily breakdown return karta hai - sab videos jo user ne watch kiye with duration, categories.

## Query Parameters

1. **filter** (optional): 'Week' | 'Month'
   - Default: 'Week'
   - Week: Current week (Mon-Sun) ka data
   - Month: Last 30 days ka data

## Response Structure

```json
{
  "code": 200,
  "message": "Get User Activity Successful",
  "data": {
    "activity": [
      {
        "day": "Mon",
        "day_name": "Monday",
        "total_minutes": 45,
        "videos": [
          {
            "id": "1",
            "title": "The 3-20 Way SIT TO STAND Leg Strength",
            "description": "A simple sit-to-stand exercise...",
            "thumbnail_url": "https://...",
            "duration": 3,
            "tags": ["Strength", "Legs"],
            "category": "Strength"
          }
        ]
      }
    ]
  }
}
```

## Features

1. **Daily Breakdown**: Data grouped by days (Monday, Tuesday, etc.)
2. **Video Details**: Har video ka complete info
3. **Duration Tracking**: Total minutes watched per day
4. **Category Support**: Videos grouped by their tags
5. **Flexible Time Range**: Week ya Month filter

## Test Cases

1. **User Activity - Week** ✓
   - Input: user: { id: 1 }, filter: 'Week'
   - Expected: code == 200 with activity array

2. **User Activity - Month** ✓
   - Input: user: { id: 1 }, filter: 'Month'
   - Expected: code == 200 with activity array

3. **User Activity - Unauthorized** ✓
   - Input: user: undefined
   - Expected: code == 401

## Database Queries

- Fetches from `video_feedbacks` table
- Joins with `videos` table for video details
- Groups by date and sums duration
- Returns ordered by date DESC

## Authentication

- Requires authenticated user (user.id)
- Returns 401 if user not provided

## Performance Notes

- SQL aggregation used for efficiency
- JSON aggregation for video arrays
- Single database query for all data