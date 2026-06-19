// REFERENCE ALGORITHM SOLUTION
// Subsets
// Route: /algorithms/backtracking/subsets

export function subsets(values) {
  const result = [];
  function build(index, path) {
    if (index === values.length) {
      result.push([...path]);
      return;
    }
    build(index + 1, path);
    path.push(values[index]);
    build(index + 1, path);
    path.pop();
  }
  build(0, []);
  return result;
}
