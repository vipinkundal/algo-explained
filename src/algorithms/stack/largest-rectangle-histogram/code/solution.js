// SPECIFIC ALGORITHM SOLUTION
// Largest Rectangle in Histogram
// Route: /algorithms/stack/largest-rectangle-histogram

export function largestRectangleHistogram(heights) {
  const stack = [];
  let best = 0;
  for (let index = 0; index <= heights.length; index += 1) {
    const current = index === heights.length ? 0 : heights[index];
    while (stack.length && current < heights[stack.at(-1)]) {
      const height = heights[stack.pop()];
      const left = stack.length ? stack.at(-1) : -1;
      best = Math.max(best, height * (index - left - 1));
    }
    stack.push(index);
  }
  return best;
}
