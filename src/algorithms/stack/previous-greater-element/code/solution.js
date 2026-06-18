// SPECIFIC ALGORITHM SOLUTION
// Previous Greater Element
// Route: /algorithms/stack/previous-greater-element

export function previousGreaterElement(values) {
  const result = [];
  const stack = [];
  for (const value of values) {
    while (stack.length && stack.at(-1) <= value) stack.pop();
    result.push(stack.at(-1) ?? -1);
    stack.push(value);
  }
  return result;
}
