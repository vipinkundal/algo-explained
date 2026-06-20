// Runnable JavaScript companion for Stack Using Linked List
// Original source: 11_Stack/02_Stack_using_LL.cpp
export function stackStackUsingLl() {
  const stack = [];
  const output = [];
  for (const value of [10, 20, 30]) stack.push(value);
  output.push(stack.pop());
  return { structure: "stack", invariant: "last in, first out", state: stack, popped: output };
}