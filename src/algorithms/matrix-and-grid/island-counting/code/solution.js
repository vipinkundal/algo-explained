// REFERENCE ALGORITHM SOLUTION
// Island Counting
// Route: /algorithms/matrix/island-counting

export function islandCounting(grid) {
  const seen = grid.map((row) => row.map(() => false));
  let count = 0;
  function visit(row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
    if (seen[row][col] || grid[row][col] !== 1) return;
    seen[row][col] = true;
    visit(row + 1, col);
    visit(row - 1, col);
    visit(row, col + 1);
    visit(row, col - 1);
  }
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[row].length; col += 1) {
      if (grid[row][col] === 1 && !seen[row][col]) {
        count += 1;
        visit(row, col);
      }
    }
  }
  return count;
}
