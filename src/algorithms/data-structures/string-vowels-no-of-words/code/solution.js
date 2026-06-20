// Runnable JavaScript companion for String Vowels No Of Words
// Original source: 06_string/03_vowels_no_of_words.cpp
export function stringVowelsNoOfWords() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}