// Runnable JavaScript companion for String Vowels No Of Words
export function stringVowelsNoOfWords() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}