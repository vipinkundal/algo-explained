// Runnable JavaScript companion for String Duplicates With Bitwise Operator
// Original source: 06_string/08_duplicates_with_bitwise_operator.cpp
export function stringDuplicatesWithBitwiseOperator() {
  const text = "decimal";
  const reversed = [...text].reverse().join("");
  return { structure: "string", input: text, reversed, length: text.length };
}