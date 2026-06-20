// Runnable JavaScript companion for Balanced Parentheses Extended
// Original source: 11_Stack/04_parenthesis_is_balanced_extended.cpp
export function stackParenthesisIsBalancedExtended() {
  const stack = [];
  const output = [];
  for (const value of [10, 20, 30]) stack.push(value);
  output.push(stack.pop());
  return { structure: "stack", invariant: "last in, first out", state: stack, popped: output };
}