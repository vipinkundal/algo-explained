// Runnable JavaScript companion for Array ADT Creating Array Of Desired Size
export function arrayAdtCreatingArrayOfDesiredSize() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}