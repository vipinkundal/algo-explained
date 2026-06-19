// REFERENCE ALGORITHM SOLUTION
// Permutations
// Route: /algorithms/backtracking/permutations

export function permutations(values) {
  const result = [];
  const used = Array(values.length).fill(false);
  function build(path) {
    if (path.length === values.length) {
      result.push([...path]);
      return;
    }
    for (let index = 0; index < values.length; index += 1) {
      if (used[index]) continue;
      used[index] = true;
      path.push(values[index]);
      build(path);
      path.pop();
      used[index] = false;
    }
  }
  build([]);
  return result;
}
