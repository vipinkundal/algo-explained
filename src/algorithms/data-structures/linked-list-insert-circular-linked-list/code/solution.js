// Runnable JavaScript companion for Insert Circular Linked List
// Original source: 09_Linked_list/16_Insert_circular_linked_lidt.cpp
export function linkedListInsertCircularLinkedList() {
  const nodes = [10, 20, 30].map((value, index, values) => ({ value, next: index + 1 < values.length ? values[index + 1] : null }));
  nodes.splice(1, 0, { value: 15, next: 20 });
  return { structure: "linked list", operation: "insert at position 1", values: nodes.map((node) => node.value) };
}