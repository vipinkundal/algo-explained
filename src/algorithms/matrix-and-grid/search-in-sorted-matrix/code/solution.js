// REFERENCE ALGORITHM SOLUTION
// Search in Sorted Matrix
// Route: /algorithms/matrix/search-in-sorted-matrix

export function searchInSortedMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return [-1, -1];
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return [row, col];
    if (matrix[row][col] > target) col -= 1;
    else row += 1;
  }
  return [-1, -1];
}
