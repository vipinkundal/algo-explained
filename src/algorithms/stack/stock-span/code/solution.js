// SPECIFIC ALGORITHM SOLUTION
// Stock Span Problem
// Route: /algorithms/stack/stock-span

export function stockSpan(prices) {
  const stack = [];
  const spans = [];
  for (let day = 0; day < prices.length; day += 1) {
    while (stack.length && prices[stack.at(-1)] <= prices[day]) stack.pop();
    spans[day] = stack.length ? day - stack.at(-1) : day + 1;
    stack.push(day);
  }
  return spans;
}
