// Runnable JavaScript companion for Sparse Matrix / Polynomial Polynomial Linked List
// Original source: 10_Sparse_matrix_and_polynimial_representation/02_polynomial_linked_list.cpp
export function sparseMatrixAndPolynimialRepresentationPolynomialLinkedList() {
  const nodes = [10, 20, 30].map((value, index, values) => ({ value, next: index + 1 < values.length ? values[index + 1] : null }));
  nodes.splice(1, 0, { value: 15, next: 20 });
  return { structure: "linked list", operation: "insert at position 1", values: nodes.map((node) => node.value) };
}