// AUTO-GENERATED ALGORITHM SOLUTION
// Anagram Detection
// Route: /algorithms/strings/anagram-detection
// This educational implementation is intentionally small and side-effect-light.

export function anagramDetection(text, pattern = "") {
  const matches = [];
  if (!pattern) return matches;
  for (let index = 0; index <= text.length - pattern.length; index += 1) {
    if (text.slice(index, index + pattern.length) === pattern) matches.push(index);
  }
  return matches;
}
