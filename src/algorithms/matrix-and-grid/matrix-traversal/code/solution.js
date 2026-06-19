// REFERENCE ALGORITHM SOLUTION
// Matrix Traversal
// Route: /algorithms/matrix/matrix-traversal

export function matrixTraversal(matrix) {
  const order = [];
  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) order.push(matrix[row][col]);
  }
  return order;
}
