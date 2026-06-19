// REFERENCE ALGORITHM SOLUTION
// Spiral Matrix
// Route: /algorithms/matrix/spiral-matrix

export function spiralMatrix(matrix) {
  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0]?.length - 1 ?? -1;
  while (top <= bottom && left <= right) {
    for (let col = left; col <= right; col += 1) result.push(matrix[top][col]);
    top += 1;
    for (let row = top; row <= bottom; row += 1) result.push(matrix[row][right]);
    right -= 1;
    if (top <= bottom) {
      for (let col = right; col >= left; col -= 1) result.push(matrix[bottom][col]);
      bottom -= 1;
    }
    if (left <= right) {
      for (let row = bottom; row >= top; row -= 1) result.push(matrix[row][left]);
      left += 1;
    }
  }
  return result;
}
