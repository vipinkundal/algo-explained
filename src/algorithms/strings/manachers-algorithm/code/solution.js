// Manacher’s Algorithm
// Route: /algorithms/strings/manachers-algorithm

export function manachersAlgorithm(text) {
  if (text.length === 0) return "";
  const transformed = "^#" + text.split("").join("#") + "#$";
  const radius = Array(transformed.length).fill(0);
  let center = 0;
  let right = 0;
  let bestCenter = 0;
  let bestRadius = 0;

  for (let index = 1; index < transformed.length - 1; index += 1) {
    const mirror = 2 * center - index;
    if (index < right) radius[index] = Math.min(right - index, radius[mirror]);
    while (transformed[index + radius[index] + 1] === transformed[index - radius[index] - 1]) radius[index] += 1;
    if (index + radius[index] > right) {
      center = index;
      right = index + radius[index];
    }
    if (radius[index] > bestRadius) {
      bestRadius = radius[index];
      bestCenter = index;
    }
  }

  const start = Math.floor((bestCenter - bestRadius) / 2);
  return text.slice(start, start + bestRadius);
}
