import Redis from "ioredis";

let redis_host = process.env.REDIS_HOST
let redis_password = process.env.REDIS_PASSWORD

let redis:undefined | Redis;

if(redis_host){
  // console.log('Redis string found',redis_host);
  redis = new Redis({
    host: redis_host,
    password: redis_password,
    port: 6379
  });
  
  redis.on("connect", () => {
    console.log("✅ Redis connected");
  });
  
  redis.on("error", (err:any) => {
    console.error("❌ Redis connection error:", err);
  });
}

export default redis;