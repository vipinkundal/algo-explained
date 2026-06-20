// Runnable JavaScript companion for String Permutation
// Original source: 06_string/10_01_permutation.cpp
export function stringPermutation() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}