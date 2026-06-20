// Runnable JavaScript companion for String Anagram
// Original source: 06_string/09_anagram.cpp
export function stringAnagram() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}