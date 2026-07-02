// Cycle Detection in Directed Graph
// Route: /algorithms/graphs/cycle-detection-directed

export function cycleDetectionDirected(graph) {
  const visited = new Set();
  const active = new Set();

  function visit(node) {
    if (active.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    active.add(node);

    for (const next of graph[node] || []) {
      if (visit(next)) return true;
    }

    active.delete(node);
    return false;
  }

  return Object.keys(graph).some((node) => visit(node));
}
