// Runnable JavaScript companion for String Duplicates
// Original source: 06_string/07_duplicates.cpp
export function stringDuplicates() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}