// Runnable JavaScript companion for C/C++ Basic Array
// Original source: 01_Essential_c_and_cpp/01_basic_array.cpp
export function essentialCAndCppBasicArray() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}