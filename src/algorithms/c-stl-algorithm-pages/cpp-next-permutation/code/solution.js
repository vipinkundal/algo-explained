// REFERENCE ALGORITHM SOLUTION
// C++ next_permutation()
// Route: /algorithms/cpp-stl/next-permutation

export function cppNextPermutation(values) {
  const result = [...values];
  let pivot = result.length - 2;
  while (pivot >= 0 && result[pivot] >= result[pivot + 1]) pivot -= 1;
  if (pivot >= 0) {
    let successor = result.length - 1;
    while (result[successor] <= result[pivot]) successor -= 1;
    [result[pivot], result[successor]] = [result[successor], result[pivot]];
  }
  for (let left = pivot + 1, right = result.length - 1; left < right; left += 1, right -= 1) {
    [result[left], result[right]] = [result[right], result[left]];
  }
  return result;
}
