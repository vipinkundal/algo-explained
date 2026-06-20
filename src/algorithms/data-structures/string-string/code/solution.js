// Runnable JavaScript companion for String
// Original source: 06_string/01_string.cpp
export function stringString() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}