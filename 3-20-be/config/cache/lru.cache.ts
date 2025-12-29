import redis from '@src/setup/redis';
import { LRUCache } from 'lru-cache';

// Create a shared LRU cache instance
const lru_cache = new LRUCache<string, any>({
  max: 10000,              // Maximum number of items
  ttl: 1000 * 60 * 60 * 24 * 30,    // 5 minutes
});

/**
 * Store data in the cache
 */
export async function setCache(type: string, id: string | number, value: any) {
  const key = `${type}:${id}`;
  if(redis){
    await redis.set(key, JSON.stringify(value), 'EX', lru_cache.ttl); // Cache for 30 days
  } else{
    lru_cache.set(key, value);
  }
}

/**
 * Retrieve cached data (returns null if not found)
 */
export async function getCache<T = any>(type: string, id: string | number) {
  const key = `${type}:${id}`;
  if(redis){
    let result = await redis.get(key);
    return result ? JSON.parse(result) as T : null;
  } else{
    return lru_cache.get(key) ?? null;
  }
}

/**
 * Delete an item from the cache
 */
export async function deleteCache(type: string, id: string | number) {
  const key = `${type}:${id}`;
  if(redis){
    await redis.del(key);
    return;
  }
  lru_cache.delete(key);
}

export async function clearCache() {
  if(redis){
    await redis.flushall();
    return;
  }
  lru_cache.clear();
}

 async function test_cache(){
  let set = await setCache('example', 1, { data: 'test' });
  let get :any = await getCache('example', 1);
  if(get.data=='test') console.log('Cache Worked fine');
}
setTimeout(() => {
  test_cache().then(() => {
  }).catch((err) => {
    console.error('Cache test error:', err);
  });
}, 3000);


// setCache('test', '123', { hello: 'world' }).then(() => {
//   getCache('test', '123').then((data) => {
//     console.log('Cached data:', data);
//   });
// });

export async function deleteCacheKeysContaining(substring: any) {
  if (!substring) return;

  if (redis) {
    const pattern = `*${substring}*`;
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
      // console.log(`Deleted ${keys.length} Redis keys matching "${substring}"`);
    } else {
      // console.log(`No Redis keys found matching "${substring}"`);
    }
  } else if (lru_cache) {
    const keysToDelete = [];
    for (const key of lru_cache.keys()) {
      if (key.includes(substring)) {
        keysToDelete.push(key);
      }
    }
    for (const key of lru_cache.keys()) {
      if (key.includes(substring)) {
        // console.log(substring, key, 707);
        
        lru_cache.delete(key);
      }
    }
    
    // console.log(`Deleted ${keysToDelete.length} LRU cache keys matching "${substring}"`);
  }
}
