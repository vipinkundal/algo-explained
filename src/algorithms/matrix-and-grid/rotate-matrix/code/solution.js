// REFERENCE ALGORITHM SOLUTION
// Rotate Matrix
// Route: /algorithms/matrix/rotate-matrix

export function rotateMatrix(matrix) {
  const n = matrix.length;
  const rotated = Array.from({ length: n }, () => Array(n));
  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) rotated[col][n - 1 - row] = matrix[row][col];
  }
  return rotated;
}
