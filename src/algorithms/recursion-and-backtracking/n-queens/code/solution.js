// REFERENCE ALGORITHM SOLUTION
// N-Queens
// Route: /algorithms/backtracking/n-queens

export function nQueens(size) {
  const result = [];
  const columns = new Set();
  const diagA = new Set();
  const diagB = new Set();
  const board = Array.from({ length: size }, () => Array(size).fill("."));
  function place(row) {
    if (row === size) {
      result.push(board.map((line) => line.join("")));
      return;
    }
    for (let col = 0; col < size; col += 1) {
      if (columns.has(col) || diagA.has(row - col) || diagB.has(row + col)) continue;
      columns.add(col);
      diagA.add(row - col);
      diagB.add(row + col);
      board[row][col] = "Q";
      place(row + 1);
      board[row][col] = ".";
      columns.delete(col);
      diagA.delete(row - col);
      diagB.delete(row + col);
    }
  }
  place(0);
  return result;
}
