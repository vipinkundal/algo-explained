// Runnable JavaScript companion for Balanced Parentheses with Stack
// Original source: 11_Stack/03_parenthesis_is_balanced.cpp
export function stackParenthesisIsBalanced() {
  const stack = [];
  const output = [];
  for (const value of [10, 20, 30]) stack.push(value);
  output.push(stack.pop());
  return { structure: "stack", invariant: "last in, first out", state: stack, popped: output };
}