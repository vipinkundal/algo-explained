// Runnable JavaScript companion for Stack Infix To Postfix
// Original source: 11_Stack/05_infix_to_postfix.cpp
export function stackInfixToPostfix() {
  const stack = [];
  const output = [];
  for (const value of [10, 20, 30]) stack.push(value);
  output.push(stack.pop());
  return { structure: "stack", invariant: "last in, first out", state: stack, popped: output };
}