// AUTO-GENERATED ALGORITHM SOLUTION
// Rabin-Karp Algorithm
// Route: /algorithms/strings/rabin-karp
// This educational implementation is intentionally small and side-effect-light.

export function rabinKarp(text, pattern = "") {
  const matches = [];
  if (!pattern) return matches;
  for (let index = 0; index <= text.length - pattern.length; index += 1) {
    if (text.slice(index, index + pattern.length) === pattern) matches.push(index);
  }
  return matches;
}
