// REFERENCE ALGORITHM SOLUTION
// Prefix Sum Matrix
// Route: /algorithms/matrix/prefix-sum-matrix

export function prefixSumMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0]?.length || 0;
  const prefix = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
  for (let row = 1; row <= rows; row += 1) {
    for (let col = 1; col <= cols; col += 1) {
      prefix[row][col] = matrix[row - 1][col - 1] + prefix[row - 1][col] + prefix[row][col - 1] - prefix[row - 1][col - 1];
    }
  }
  return prefix;
}
