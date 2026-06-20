// Runnable JavaScript companion for Stack Postfix Eval
// Original source: 11_Stack/07_postfix_eval.cpp
export function stackPostfixEval() {
  const stack = [];
  const output = [];
  for (const value of [10, 20, 30]) stack.push(value);
  output.push(stack.pop());
  return { structure: "stack", invariant: "last in, first out", state: stack, popped: output };
}