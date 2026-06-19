// REFERENCE ALGORITHM SOLUTION
// Recursion Basics
// Route: /algorithms/foundations/recursion-basics

export function recursionBasics(values) {
  const input = Array.isArray(values) ? values : [1, 2, 3];
  const result = [];
  function build(index, path) {
    if (index === input.length) {
      result.push(path);
      return;
    }
    build(index + 1, path);
    build(index + 1, [...path, input[index]]);
  }
  build(0, []);
  return result;
}
