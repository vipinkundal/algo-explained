// Runnable JavaScript companion for String Changing Case
export function stringChangingCase() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}