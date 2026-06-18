// AUTO-GENERATED ALGORITHM SOLUTION
// Longest Palindromic Substring
// Route: /algorithms/strings/longest-palindromic-substring
// This educational implementation is intentionally small and side-effect-light.

export function longestPalindromicSubstring(text, pattern = "") {
  const matches = [];
  if (!pattern) return matches;
  for (let index = 0; index <= text.length - pattern.length; index += 1) {
    if (text.slice(index, index + pattern.length) === pattern) matches.push(index);
  }
  return matches;
}
