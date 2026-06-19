// REFERENCE ALGORITHM SOLUTION
// Rabin-Karp Algorithm
// Route: /algorithms/strings/rabin-karp

export function rabinKarp(text, pattern) {
  const matches = [];
  const size = pattern.length;
  for (let index = 0; index <= text.length - size; index += 1) {
    if (text.slice(index, index + size) === pattern) matches.push(index);
  }
  return matches;
}
