// REFERENCE ALGORITHM SOLUTION
// C++ unique()
// Route: /algorithms/cpp-stl/unique

export function cppUnique(values) {
  const result = [];
  for (const value of values) {
    if (result.length === 0 || result[result.length - 1] !== value) result.push(value);
  }
  return result;
}
