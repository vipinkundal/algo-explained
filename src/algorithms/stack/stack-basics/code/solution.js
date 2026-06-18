// SPECIFIC ALGORITHM SOLUTION
// Stack Basics
// Route: /algorithms/stack/stack-basics

export function stackBasics(operations) {
  const stack = [];
  const output = [];
  for (const operation of operations) {
    if (operation.type === "push") stack.push(operation.value);
    if (operation.type === "pop") output.push(stack.pop() ?? null);
    if (operation.type === "peek") output.push(stack.at(-1) ?? null);
  }
  return output;
}
