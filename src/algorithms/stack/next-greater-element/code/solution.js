// SPECIFIC ALGORITHM SOLUTION
// Next Greater Element
// Route: /algorithms/stack/next-greater-element

export function nextGreaterElement(values) {
  const result = Array(values.length).fill(-1);
  const stack = [];
  for (let index = 0; index < values.length; index += 1) {
    while (stack.length && values[index] > values[stack.at(-1)]) {
      result[stack.pop()] = values[index];
    }
    stack.push(index);
  }
  return result;
}
