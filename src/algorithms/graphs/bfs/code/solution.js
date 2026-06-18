// SPECIFIC ALGORITHM SOLUTION
// Breadth-First Search
// Route: /algorithms/graphs/bfs

export function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const next of graph[node] || []) {
      if (visited.has(next)) continue;
      visited.add(next);
      queue.push(next);
    }
  }
  return order;
}
