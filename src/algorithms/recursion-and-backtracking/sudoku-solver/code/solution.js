// REFERENCE ALGORITHM SOLUTION
// Sudoku Solver
// Route: /algorithms/backtracking/sudoku-solver

export function sudokuSolver(board) {
  const grid = board.map((row) => [...row]);
  function isValid(row, col, value) {
    for (let index = 0; index < 9; index += 1) {
      if (grid[row][index] === value || grid[index][col] === value) return false;
    }
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let r = 0; r < 3; r += 1) for (let c = 0; c < 3; c += 1) if (grid[boxRow + r][boxCol + c] === value) return false;
    return true;
  }
  function solve() {
    for (let row = 0; row < 9; row += 1) {
      for (let col = 0; col < 9; col += 1) {
        if (grid[row][col] !== 0) continue;
        for (let value = 1; value <= 9; value += 1) {
          if (!isValid(row, col, value)) continue;
          grid[row][col] = value;
          if (solve()) return true;
          grid[row][col] = 0;
        }
        return false;
      }
    }
    return true;
  }
  solve();
  return grid;
}
