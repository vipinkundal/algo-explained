// REFERENCE ALGORITHM SOLUTION
// Longest Palindromic Substring
// Route: /algorithms/strings/longest-palindromic-substring

export function longestPalindromicSubstring(text) {
  let best = "";
  function expand(left, right) {
    while (left >= 0 && right < text.length && text[left] === text[right]) {
      left -= 1;
      right += 1;
    }
    const current = text.slice(left + 1, right);
    if (current.length > best.length) best = current;
  }
  for (let index = 0; index < text.length; index += 1) {
    expand(index, index);
    expand(index, index + 1);
  }
  return best;
}
