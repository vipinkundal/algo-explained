// Runnable JavaScript companion for Find Missing Element in Array
// Original source: 05_Array_ADT/10_01_finding_mising_element.cpp
export function arrayAdtFindingMissingElement() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}