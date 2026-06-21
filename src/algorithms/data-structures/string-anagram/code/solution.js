// Runnable JavaScript companion for String Anagram
export function stringAnagram() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}