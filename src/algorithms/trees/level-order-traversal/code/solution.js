// REFERENCE ALGORITHM SOLUTION
// Level Order Traversal
// Route: /algorithms/trees/level-order-traversal

export function levelOrderTraversal(root) {
  if (!root) return [];
  const order = [];
  const queue = [root];
  for (let index = 0; index < queue.length; index += 1) {
    const node = queue[index];
    order.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return order;
}
