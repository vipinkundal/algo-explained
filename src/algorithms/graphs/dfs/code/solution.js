// Depth-First Search
// Route: /algorithms/graphs/dfs

export function dfs(graph, start) {
  const visited = new Set();
  const order = [];

  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    order.push(node);

    for (const next of graph[node] || []) {
      visit(next);
    }
  }

  visit(start);
  return order;
}
