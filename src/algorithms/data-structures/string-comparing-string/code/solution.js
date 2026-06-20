// Runnable JavaScript companion for Comparing String
// Original source: 06_string/06_comparing_string.cpp
export function stringComparingString() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}