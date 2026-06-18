// SPECIFIC ALGORITHM SOLUTION
// Kosaraju’s Algorithm
// Route: /algorithms/graphs/kosaraju

export function kosaraju(graph) {
  const visited = new Set();
  const order = [];
  function dfs(node) {
    visited.add(node);
    for (const next of graph[node] || []) if (!visited.has(next)) dfs(next);
    order.push(node);
  }
  Object.keys(graph).forEach((node) => { if (!visited.has(node)) dfs(node); });
  const reversed = {};
  for (const [node, edges] of Object.entries(graph)) {
    reversed[node] ||= [];
    for (const next of edges) {
      reversed[next] ||= [];
      reversed[next].push(node);
    }
  }
  visited.clear();
  const components = [];
  function collect(node, component) {
    visited.add(node);
    component.push(node);
    for (const next of reversed[node] || []) if (!visited.has(next)) collect(next, component);
  }
  while (order.length) {
    const node = order.pop();
    if (visited.has(node)) continue;
    const component = [];
    collect(node, component);
    components.push(component);
  }
  return components;
}
