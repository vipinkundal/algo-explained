// SPECIFIC ALGORITHM SOLUTION
// LRU Cache
// Route: /algorithms/queue/lru-cache

export function lruCache(capacity, operations) {
  const cache = new Map();
  const output = [];
  for (const operation of operations) {
    if (operation.type === "get") {
      if (!cache.has(operation.key)) output.push(-1);
      else {
        const value = cache.get(operation.key);
        cache.delete(operation.key);
        cache.set(operation.key, value);
        output.push(value);
      }
    }
    if (operation.type === "put") {
      if (cache.has(operation.key)) cache.delete(operation.key);
      cache.set(operation.key, operation.value);
      if (cache.size > capacity) cache.delete(cache.keys().next().value);
    }
  }
  return output;
}
