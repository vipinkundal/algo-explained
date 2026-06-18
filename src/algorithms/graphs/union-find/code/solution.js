// SPECIFIC ALGORITHM SOLUTION
// Disjoint Set Union / Union Find
// Route: /algorithms/graphs/union-find

export function unionFind(size, operations) {
  const parent = Array.from({ length: size }, (_, index) => index);
  const rank = Array(size).fill(0);
  const find = (node) => parent[node] === node ? node : (parent[node] = find(parent[node]));
  const unite = (a, b) => {
    let rootA = find(a);
    let rootB = find(b);
    if (rootA === rootB) return false;
    if (rank[rootA] < rank[rootB]) [rootA, rootB] = [rootB, rootA];
    parent[rootB] = rootA;
    if (rank[rootA] === rank[rootB]) rank[rootA] += 1;
    return true;
  };
  return operations.map(([a, b]) => unite(a, b));
}
