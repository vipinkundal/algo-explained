// REFERENCE ALGORITHM SOLUTION
// Combination Sum
// Route: /algorithms/backtracking/combination-sum

export function combinationSum(candidates, target) {
  const values = [...candidates].sort((a, b) => a - b);
  const result = [];
  function backtrack(start, remaining, path) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }
    for (let index = start; index < values.length; index += 1) {
      if (values[index] > remaining) break;
      path.push(values[index]);
      backtrack(index, remaining - values[index], path);
      path.pop();
    }
  }
  backtrack(0, target, []);
  return result;
}
