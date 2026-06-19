// REFERENCE ALGORITHM SOLUTION
// Word Search
// Route: /algorithms/backtracking/word-search

export function wordSearch(board, word) {
  const rows = board.length;
  const cols = board[0]?.length || 0;
  const seen = Array.from({ length: rows }, () => Array(cols).fill(false));
  function match(row, col, index) {
    if (index === word.length) return true;
    if (row < 0 || col < 0 || row >= rows || col >= cols) return false;
    if (seen[row][col] || board[row][col] !== word[index]) return false;
    seen[row][col] = true;
    const found = match(row + 1, col, index + 1) || match(row - 1, col, index + 1) || match(row, col + 1, index + 1) || match(row, col - 1, index + 1);
    seen[row][col] = false;
    return found;
  }
  for (let row = 0; row < rows; row += 1) for (let col = 0; col < cols; col += 1) if (match(row, col, 0)) return true;
  return false;
}
