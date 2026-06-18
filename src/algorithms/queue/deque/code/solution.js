// SPECIFIC ALGORITHM SOLUTION
// Deque
// Route: /algorithms/queue/deque

export function deque(operations) {
  const values = [];
  const output = [];
  for (const operation of operations) {
    if (operation.type === "pushFront") values.unshift(operation.value);
    if (operation.type === "pushBack") values.push(operation.value);
    if (operation.type === "popFront") output.push(values.shift() ?? null);
    if (operation.type === "popBack") output.push(values.pop() ?? null);
  }
  return output;
}
