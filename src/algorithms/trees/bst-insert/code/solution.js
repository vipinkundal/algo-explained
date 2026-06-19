// REFERENCE ALGORITHM SOLUTION
// BST Insert
// Route: /algorithms/trees/bst-insert

export function bstInsert(root, value) {
  const insert = (node, nextValue) => {
    if (!node) return { value: nextValue, left: null, right: null };
    const copy = { value: node.value, left: node.left, right: node.right };
    if (nextValue < copy.value) copy.left = insert(copy.left, nextValue);
    else if (nextValue > copy.value) copy.right = insert(copy.right, nextValue);
    return copy;
  };
  const tree = Array.isArray(root) ? root.reduce((node, next) => insert(node, next), null) : root;
  return insert(tree, value);
}
