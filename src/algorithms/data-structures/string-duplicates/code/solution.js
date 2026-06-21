// Runnable JavaScript companion for String Duplicates
export function stringDuplicates() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}