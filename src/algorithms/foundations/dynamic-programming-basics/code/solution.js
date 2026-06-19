// REFERENCE ALGORITHM SOLUTION
// Dynamic Programming Basics
// Route: /algorithms/foundations/dynamic-programming-basics

export function dynamicProgrammingBasics(values) {
  const numbers = Array.isArray(values) ? values : [1, 2, 3];
  const state = [0];
  for (const value of numbers) state.push(state[state.length - 1] + value);
  return { state, answer: state[state.length - 1] };
}
