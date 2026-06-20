// Runnable JavaScript companion for Linear Search in Array ADT with Transposition
// Original source: 05_Array_ADT/03_02_linerar_search.cpp
export function arrayAdtLinearSearchTransposition() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}