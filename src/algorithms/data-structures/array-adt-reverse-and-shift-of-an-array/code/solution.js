// Runnable JavaScript companion for Array ADT Reverse And Shift Of An Array
// Original source: 05_Array_ADT/05_reverse_and_shift_of_an_array.cpp
export function arrayAdtReverseAndShiftOfAnArray() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}