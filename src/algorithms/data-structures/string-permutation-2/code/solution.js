// Runnable JavaScript companion for String Permutation
export function stringPermutation2() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}