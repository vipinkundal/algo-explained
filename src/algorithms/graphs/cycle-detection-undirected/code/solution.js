// Cycle Detection in Undirected Graph
// Route: /algorithms/graphs/cycle-detection-undirected

export function cycleDetectionUndirected(graph) {
  const visited = new Set();

  function visit(node, parent) {
    visited.add(node);

    for (const next of graph[node] || []) {
      if (!visited.has(next) && visit(next, node)) return true;
      if (visited.has(next) && next !== parent) return true;
    }

    return false;
  }

  return Object.keys(graph).some((node) => !visited.has(node) && visit(node, null));
}
