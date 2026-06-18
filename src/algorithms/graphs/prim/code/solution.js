// SPECIFIC ALGORITHM SOLUTION
// Prim’s Algorithm
// Route: /algorithms/graphs/prim

export function prim(graph, start) {
  const visited = new Set([start]);
  const mst = [];
  while (visited.size < Object.keys(graph).length) {
    let best = null;
    for (const from of visited) {
      for (const [to, weight] of graph[from] || []) {
        if (!visited.has(to) && (!best || weight < best[2])) best = [from, to, weight];
      }
    }
    if (!best) break;
    mst.push(best);
    visited.add(best[1]);
  }
  return mst;
}
