// SPECIFIC ALGORITHM SOLUTION
// Topological Sort
// Route: /algorithms/graphs/topological-sort

export function topologicalSort(graph) {
  const indegree = Object.fromEntries(Object.keys(graph).map((node) => [node, 0]));
  for (const edges of Object.values(graph)) for (const next of edges) indegree[next] = (indegree[next] ?? 0) + 1;
  const queue = Object.keys(indegree).filter((node) => indegree[node] === 0);
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const next of graph[node] || []) {
      indegree[next] -= 1;
      if (indegree[next] === 0) queue.push(next);
    }
  }
  return order.length === Object.keys(indegree).length ? order : null;
}
