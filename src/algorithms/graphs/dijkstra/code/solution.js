// SPECIFIC ALGORITHM SOLUTION
// Dijkstra’s Algorithm
// Route: /algorithms/graphs/dijkstra

export function dijkstra(graph, start) {
  const distances = Object.fromEntries(Object.keys(graph).map((node) => [node, Infinity]));
  const visited = new Set();
  distances[start] = 0;
  while (visited.size < Object.keys(graph).length) {
    const node = Object.keys(distances).filter((candidate) => !visited.has(candidate)).sort((a, b) => distances[a] - distances[b])[0];
    if (node === undefined || distances[node] === Infinity) break;
    visited.add(node);
    for (const [next, weight] of graph[node] || []) {
      distances[next] = Math.min(distances[next] ?? Infinity, distances[node] + weight);
    }
  }
  return distances;
}
