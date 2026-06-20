// Runnable JavaScript companion for Creation And Display Of Sparse Matrix
// Original source: 08_sparse_matrix/01_creation_and_display_of_sparse_matrix.c
export function sparseMatrixCreationAndDisplayOfSparseMatrix() {
  const matrix = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
  const nonZero = matrix.flatMap((row, r) => row.map((value, c) => ({ r, c, value }))).filter((cell) => cell.value !== 0);
  return { structure: "matrix", representation: "non-zero entries", nonZero };
}