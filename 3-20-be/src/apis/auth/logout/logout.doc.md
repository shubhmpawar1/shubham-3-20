# Logout API

1. Authorization header mein Bearer token leta hai
2. Server 200 return karta hai
3. Flutter side `AuthRepositoryImpl.signOut()` token delete karta hai aur Google/Facebook session bhi clear karta hai

### Test Cases

1. Valid token ke saath request → 200 Logged out successfully - Done
2. Bina token ke request → Middleware 401 return karega - Done

### Internal Work

- Abhi client-side token deletion par rely kar rahe hain
- Production mein Redis blacklist implement karna recommended hai
