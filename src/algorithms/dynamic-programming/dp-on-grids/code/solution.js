// SPECIFIC ALGORITHM SOLUTION
// DP on Grids
// Route: /algorithms/dynamic-programming/dp-on-grids

export function dpOnGrids(grid) {
  const rows = grid.length;
  const cols = grid[0]?.length || 0;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (grid[row][col] === 1) continue;
      if (row === 0 && col === 0) dp[row][col] = 1;
      else dp[row][col] = (dp[row - 1]?.[col] || 0) + (dp[row]?.[col - 1] || 0);
    }
  }
  return dp[rows - 1]?.[cols - 1] || 0;
}
