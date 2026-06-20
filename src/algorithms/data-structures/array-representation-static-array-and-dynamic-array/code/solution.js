// Runnable JavaScript companion for Static Array And Dynamic Array
// Original source: 04_Array_representation/01_static_array_and_dynamic_array.cpp
export function arrayRepresentationStaticArrayAndDynamicArray() {
  const values = [3, 1, 4, 1, 5];
  const sum = values.reduce((total, value) => total + value, 0);
  return { structure: "array", values, length: values.length, max: Math.max(...values), sum };
}