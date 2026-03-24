# Get Favourite Videos Api

1. Takes user_id, page, page_size, sort_by, sort_order in query
2. Returns paginated list of favourite videos with full video details
3. Default page = 1, page_size = 10, sort_by = createdAt, sort_order = DESC

### Test Cases

1. Valid user_id with favourites -> Should return paginated video list
2. Valid user_id with no favourites -> Should return empty array
3. If user_id is not received -> Should return error