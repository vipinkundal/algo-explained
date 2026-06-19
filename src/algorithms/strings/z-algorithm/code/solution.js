// REFERENCE ALGORITHM SOLUTION
// Z Algorithm
// Route: /algorithms/strings/z-algorithm

export function zAlgorithm(text, pattern) {
  const combined = pattern + "$" + text;
  const z = Array(combined.length).fill(0);
  for (let index = 1, left = 0, right = 0; index < combined.length; index += 1) {
    if (index <= right) z[index] = Math.min(right - index + 1, z[index - left]);
    while (index + z[index] < combined.length && combined[z[index]] === combined[index + z[index]]) z[index] += 1;
    if (index + z[index] - 1 > right) {
      left = index;
      right = index + z[index] - 1;
    }
  }
  const matches = [];
  for (let index = pattern.length + 1; index < combined.length; index += 1) {
    if (z[index] === pattern.length) matches.push(index - pattern.length - 1);
  }
  return matches;
}
