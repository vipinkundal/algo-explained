// Anagram Detection
// Route: /algorithms/strings/anagram-detection

export function anagramDetection(first, second) {
  if (first.length !== second.length) return false;
  const counts = new Map();
  for (const char of first) counts.set(char, (counts.get(char) || 0) + 1);
  for (const char of second) {
    const remaining = counts.get(char) || 0;
    if (remaining === 0) return false;
    counts.set(char, remaining - 1);
  }
  return true;
}
