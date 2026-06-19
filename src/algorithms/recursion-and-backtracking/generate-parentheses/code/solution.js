// REFERENCE ALGORITHM SOLUTION
// Generate Parentheses
// Route: /algorithms/backtracking/generate-parentheses

export function generateParentheses(pairs) {
  const result = [];
  function build(open, close, text) {
    if (text.length === pairs * 2) {
      result.push(text);
      return;
    }
    if (open < pairs) build(open + 1, close, text + "(");
    if (close < open) build(open, close + 1, text + ")");
  }
  build(0, 0, "");
  return result;
}
