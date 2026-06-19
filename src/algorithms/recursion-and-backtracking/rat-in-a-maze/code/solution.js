// REFERENCE ALGORITHM SOLUTION
// Rat in a Maze
// Route: /algorithms/backtracking/rat-in-a-maze

export function ratInAMaze(maze) {
  const n = maze.length;
  const result = [];
  const seen = Array.from({ length: n }, () => Array(n).fill(false));
  const moves = [[1, 0, "D"], [0, -1, "L"], [0, 1, "R"], [-1, 0, "U"]];
  function walk(row, col, path) {
    if (row === n - 1 && col === n - 1) {
      result.push(path);
      return;
    }
    seen[row][col] = true;
    for (const [dr, dc, label] of moves) {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (nextRow < 0 || nextCol < 0 || nextRow >= n || nextCol >= n) continue;
      if (seen[nextRow][nextCol] || maze[nextRow][nextCol] !== 1) continue;
      walk(nextRow, nextCol, path + label);
    }
    seen[row][col] = false;
  }
  if (maze[0]?.[0] === 1) walk(0, 0, "");
  return result;
}
