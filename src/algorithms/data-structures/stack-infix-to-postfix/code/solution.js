// Runnable JavaScript companion for Stack Infix To Postfix
export function stackInfixToPostfix() {
  const stack = [];
  const output = [];
  for (const value of [10, 20, 30]) stack.push(value);
  output.push(stack.pop());
  return { structure: "stack", invariant: "last in, first out", state: stack, popped: output };
}