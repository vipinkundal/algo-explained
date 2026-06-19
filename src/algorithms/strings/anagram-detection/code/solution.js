// REFERENCE ALGORITHM SOLUTION
// Anagram Detection
// Route: /algorithms/strings/anagram-detection

export function anagramDetection(first, second) {
  if (first.length !== second.length) return false;
  const counts = {};
  for (const char of first) counts[char] = (counts[char] || 0) + 1;
  for (const char of second) {
    if (!counts[char]) return false;
    counts[char] -= 1;
  }
  return true;
}
