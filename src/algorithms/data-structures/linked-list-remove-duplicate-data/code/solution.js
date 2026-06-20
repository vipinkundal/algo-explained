// Runnable JavaScript companion for Linked List Remove Duplicate Data
// Original source: 09_Linked_list/10_REmove_duplicate_data.cpp
export function linkedListRemoveDuplicateData() {
  const nodes = [10, 20, 30].map((value, index, values) => ({ value, next: index + 1 < values.length ? values[index + 1] : null }));
  nodes.splice(1, 0, { value: 15, next: 20 });
  return { structure: "linked list", operation: "insert at position 1", values: nodes.map((node) => node.value) };
}