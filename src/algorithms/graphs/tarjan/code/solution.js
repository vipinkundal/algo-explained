// Tarjan's Algorithm
// Route: /algorithms/graphs/tarjan

export function tarjan(graph) {
  let index = 0;
  const stack = [];
  const onStack = new Set();
  const indices = {};
  const low = {};
  const components = [];

  function strongConnect(node) {
    indices[node] = low[node] = index;
    index += 1;
    stack.push(node);
    onStack.add(node);

    for (const next of graph[node] || []) {
      if (indices[next] === undefined) {
        strongConnect(next);
        low[node] = Math.min(low[node], low[next]);
      } else if (onStack.has(next)) {
        low[node] = Math.min(low[node], indices[next]);
      }
    }

    if (low[node] === indices[node]) {
      const component = [];
      let current;
      do {
        current = stack.pop();
        onStack.delete(current);
        component.push(current);
      } while (current !== node);
      components.push(component);
    }
  }

  for (const node of Object.keys(graph)) {
    if (indices[node] === undefined) strongConnect(node);
  }

  return components;
}
