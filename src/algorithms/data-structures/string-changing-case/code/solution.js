// Runnable JavaScript companion for String Changing Case
// Original source: 06_string/02_changing_case.cpp
export function stringChangingCase() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}