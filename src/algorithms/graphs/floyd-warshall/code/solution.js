// Floyd-Warshall Algorithm
// Route: /algorithms/graphs/floyd-warshall

export function floydWarshall(matrix) {
  const dist = matrix.map((row) => [...row]);

  for (let mid = 0; mid < dist.length; mid += 1) {
    for (let from = 0; from < dist.length; from += 1) {
      for (let to = 0; to < dist.length; to += 1) {
        dist[from][to] = Math.min(dist[from][to], dist[from][mid] + dist[mid][to]);
      }
    }
  }

  return dist;
}
