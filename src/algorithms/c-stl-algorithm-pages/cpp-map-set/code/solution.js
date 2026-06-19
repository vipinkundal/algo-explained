// REFERENCE ALGORITHM SOLUTION
// C++ map / set
// Route: /algorithms/cpp-stl/map-set

export function cppMapSet(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) || 0) + 1);
  return { map: Object.fromEntries(counts), set: [...new Set(values)] };
}
