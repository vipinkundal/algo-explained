// Longest Palindromic Substring
// Route: /algorithms/strings/longest-palindromic-substring

export function longestPalindromicSubstring(text) {
  let bestStart = 0;
  let bestLength = 0;

  function expand(left, right) {
    while (left >= 0 && right < text.length && text[left] === text[right]) {
      left -= 1;
      right += 1;
    }
    const length = right - left - 1;
    if (length > bestLength) {
      bestStart = left + 1;
      bestLength = length;
    }
  }

  for (let index = 0; index < text.length; index += 1) {
    expand(index, index);
    expand(index, index + 1);
  }
  return text.slice(bestStart, bestStart + bestLength);
}
