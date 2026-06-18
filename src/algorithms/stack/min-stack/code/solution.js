// SPECIFIC ALGORITHM SOLUTION
// Min Stack
// Route: /algorithms/stack/min-stack

export function minStack(operations) {
  const stack = [];
  const mins = [];
  const output = [];
  for (const operation of operations) {
    if (operation.type === "push") {
      stack.push(operation.value);
      mins.push(Math.min(operation.value, mins.at(-1) ?? operation.value));
    }
    if (operation.type === "pop") {
      stack.pop();
      mins.pop();
    }
    if (operation.type === "min") output.push(mins.at(-1) ?? null);
  }
  return output;
}
