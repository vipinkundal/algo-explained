// Runnable JavaScript companion for Array ADT Menu
// Original source: 05_Array_ADT/09_menu.cpp
export function arrayAdtMenu() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}