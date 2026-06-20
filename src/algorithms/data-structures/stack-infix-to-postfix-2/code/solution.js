// Runnable JavaScript companion for Infix to Postfix Conversion
// Original source: 11_Stack/06_infix_to_posstfix.cpp
export function stackInfixToPostfix2() {
  const stack = [];
  const output = [];
  for (const value of [10, 20, 30]) stack.push(value);
  output.push(stack.pop());
  return { structure: "stack", invariant: "last in, first out", state: stack, popped: output };
}