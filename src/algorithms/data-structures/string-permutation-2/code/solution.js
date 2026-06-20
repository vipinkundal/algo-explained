// Runnable JavaScript companion for String Permutation
// Original source: 06_string/10_02_permutattion.cpp
export function stringPermutation2() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}