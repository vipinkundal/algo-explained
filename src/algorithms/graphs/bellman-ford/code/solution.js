// Bellman-Ford Algorithm
// Route: /algorithms/graphs/bellman-ford

export function bellmanFord(vertices, edges, start) {
  const distance = Object.fromEntries(vertices.map((vertex) => [vertex, Infinity]));
  distance[start] = 0;

  for (let pass = 1; pass < vertices.length; pass += 1) {
    for (const [from, to, weight] of edges) {
      const candidate = distance[from] + weight;
      if (distance[from] !== Infinity && candidate < distance[to]) {
        distance[to] = candidate;
      }
    }
  }

  const hasNegativeCycle = edges.some(([from, to, weight]) => (
    distance[from] !== Infinity && distance[from] + weight < distance[to]
  ));

  return { distance, hasNegativeCycle };
}
