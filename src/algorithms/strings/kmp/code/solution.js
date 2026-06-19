// REFERENCE ALGORITHM SOLUTION
// KMP Algorithm
// Route: /algorithms/strings/kmp

export function kmp(text, pattern) {
  const lps = Array(pattern.length).fill(0);
  for (let index = 1, length = 0; index < pattern.length;) {
    if (pattern[index] === pattern[length]) lps[index++] = ++length;
    else if (length) length = lps[length - 1];
    else lps[index++] = 0;
  }
  const matches = [];
  for (let i = 0, j = 0; i < text.length;) {
    if (text[i] === pattern[j]) {
      i += 1;
      j += 1;
      if (j === pattern.length) {
        matches.push(i - j);
        j = lps[j - 1];
      }
    } else if (j) j = lps[j - 1];
    else i += 1;
  }
  return matches;
}
