// Runnable JavaScript companion for Sparse Matrix Addition
// Original source: 08_sparse_matrix/02_addition.c
export function sparseMatrixAddition() {
  const matrix = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
  const nonZero = matrix.flatMap((row, r) => row.map((value, c) => ({ r, c, value }))).filter((cell) => cell.value !== 0);
  return { structure: "matrix", representation: "non-zero entries", nonZero };
}