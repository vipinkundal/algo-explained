// AUTO-GENERATED ALGORITHM SOLUTION
// Prefix Sum Matrix
// Route: /algorithms/matrix/prefix-sum-matrix
// This educational implementation is intentionally small and side-effect-light.

export function prefixSumMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0]?.length || 0;
  const order = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) order.push(matrix[row][col]);
  }
  return order;
}
