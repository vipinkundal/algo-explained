// REFERENCE ALGORITHM SOLUTION
// BST Delete
// Route: /algorithms/trees/bst-delete

export function bstDelete(root, value) {
  const fromArray = (values) => values.reduce((node, next) => insert(node, next), null);
  const insert = (node, nextValue) => {
    if (!node) return { value: nextValue, left: null, right: null };
    if (nextValue < node.value) node.left = insert(node.left, nextValue);
    else if (nextValue > node.value) node.right = insert(node.right, nextValue);
    return node;
  };
  const clone = (node) => node ? { value: node.value, left: clone(node.left), right: clone(node.right) } : null;
  const minValue = (node) => node.left ? minValue(node.left) : node.value;
  function remove(node, target) {
    if (!node) return null;
    if (target < node.value) node.left = remove(node.left, target);
    else if (target > node.value) node.right = remove(node.right, target);
    else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      node.value = minValue(node.right);
      node.right = remove(node.right, node.value);
    }
    return node;
  }
  return remove(Array.isArray(root) ? fromArray(root) : clone(root), value);
}
