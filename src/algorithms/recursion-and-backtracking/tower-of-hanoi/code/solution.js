// AUTO-GENERATED ALGORITHM SOLUTION
// Tower of Hanoi
// Route: /algorithms/recursion/tower-of-hanoi
// This educational implementation is intentionally small and side-effect-light.

export function towerOfHanoi(choices) {
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
