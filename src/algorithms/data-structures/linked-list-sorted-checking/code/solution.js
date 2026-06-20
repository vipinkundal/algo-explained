// Runnable JavaScript companion for Linked List Sorted Checking
// Original source: 09_Linked_list/09_Sorted_checking.cpp
export function linkedListSortedChecking() {
  const nodes = [10, 20, 30].map((value, index, values) => ({ value, next: index + 1 < values.length ? values[index + 1] : null }));
  nodes.splice(1, 0, { value: 15, next: 20 });
  return { structure: "linked list", operation: "insert at position 1", values: nodes.map((node) => node.value) };
}