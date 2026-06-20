// Runnable JavaScript companion for Reverse String
// Original source: 06_string/05_reverse_string.cpp
export function stringReverseString() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}