// REFERENCE ALGORITHM SOLUTION
// Backtracking Basics
// Route: /algorithms/foundations/backtracking-basics

export function backtrackingBasics(choices) {
  const values = Array.isArray(choices) ? choices : ["A", "B", "C"];
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
