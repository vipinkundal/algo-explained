// AUTO-GENERATED ALGORITHM SOLUTION
// Rat in a Maze
// Route: /algorithms/backtracking/rat-in-a-maze
// This educational implementation is intentionally small and side-effect-light.

export function ratInAMaze(choices) {
  const values = Array.isArray(choices) ? choices : [];
  const result = [];
  const path = [];

  function backtrack(index) {
    if (index === values.length) {
      result.push([...path]);
      return;
    }
    backtrack(index + 1);
    path.push(values[index]);
    backtrack(index + 1);
    path.pop();
  }

  backtrack(0);
  return result;
}
