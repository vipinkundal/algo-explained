// SPECIFIC ALGORITHM SOLUTION
// Valid Parentheses
// Route: /algorithms/stack/valid-parentheses

export function validParentheses(text) {
  const pairs = { "(": ")", "[": "]", "{": "}" };
  const stack = [];
  for (const char of text) {
    if (pairs[char]) stack.push(pairs[char]);
    else if ([")", "]", "}"].includes(char) && stack.pop() !== char) return false;
  }
  return stack.length === 0;
}
