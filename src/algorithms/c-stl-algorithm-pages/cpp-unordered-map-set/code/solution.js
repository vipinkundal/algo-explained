// REFERENCE ALGORITHM SOLUTION
// C++ unordered_map / unordered_set
// Route: /algorithms/cpp-stl/unordered-map-set

export function cppUnorderedMapSet(values) {
  const counts = {};
  for (const value of values) counts[value] = (counts[value] || 0) + 1;
  return { unorderedMap: counts, unorderedSet: [...new Set(values)] };
}
