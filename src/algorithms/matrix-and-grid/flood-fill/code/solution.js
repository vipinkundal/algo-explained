// REFERENCE ALGORITHM SOLUTION
// Flood Fill
// Route: /algorithms/matrix/flood-fill

export function floodFill(image, startRow, startCol, newColor) {
  const grid = image.map((row) => [...row]);
  const original = grid[startRow]?.[startCol];
  if (original === undefined || original === newColor) return grid;
  function paint(row, col) {
    if (grid[row]?.[col] !== original) return;
    grid[row][col] = newColor;
    paint(row + 1, col);
    paint(row - 1, col);
    paint(row, col + 1);
    paint(row, col - 1);
  }
  paint(startRow, startCol);
  return grid;
}
