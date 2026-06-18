// SPECIFIC ALGORITHM SOLUTION
// Dutch National Flag
// Route: /algorithms/array-patterns/dutch-national-flag

export function dutchNationalFlag(array) {
  const values = [...array];
  let low = 0;
  let mid = 0;
  let high = values.length - 1;
  while (mid <= high) {
    if (values[mid] === 0) [values[low++], values[mid++]] = [values[mid], values[low]];
    else if (values[mid] === 2) [values[mid], values[high--]] = [values[high], values[mid]];
    else mid += 1;
  }
  return values;
}
