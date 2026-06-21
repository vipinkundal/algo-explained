// Runnable JavaScript companion for Reverse String
export function stringReverseString() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}