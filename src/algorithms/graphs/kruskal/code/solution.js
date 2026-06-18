// SPECIFIC ALGORITHM SOLUTION
// Kruskal’s Algorithm
// Route: /algorithms/graphs/kruskal

export function kruskal(vertexCount, edges) {
  const parent = Array.from({ length: vertexCount }, (_, index) => index);
  const find = (node) => parent[node] === node ? node : (parent[node] = find(parent[node]));
  const unite = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) return false;
    parent[rootB] = rootA;
    return true;
  };
  const mst = [];
  for (const edge of [...edges].sort((a, b) => a[2] - b[2])) {
    if (unite(edge[0], edge[1])) mst.push(edge);
  }
  return mst;
}
