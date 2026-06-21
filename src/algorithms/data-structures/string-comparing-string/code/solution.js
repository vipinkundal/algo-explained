// Runnable JavaScript companion for Comparing String
export function stringComparingString() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}