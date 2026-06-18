// SPECIFIC ALGORITHM SOLUTION
// Merge K Sorted Lists
// Route: /algorithms/heaps/merge-k-sorted-lists

export function mergeKSortedLists(lists) {
  const indices = Array(lists.length).fill(0);
  const result = [];
  while (true) {
    let bestList = -1;
    for (let list = 0; list < lists.length; list += 1) {
      if (indices[list] >= lists[list].length) continue;
      if (bestList === -1 || lists[list][indices[list]] < lists[bestList][indices[bestList]]) bestList = list;
    }
    if (bestList === -1) break;
    result.push(lists[bestList][indices[bestList]++]);
  }
  return result;
}
