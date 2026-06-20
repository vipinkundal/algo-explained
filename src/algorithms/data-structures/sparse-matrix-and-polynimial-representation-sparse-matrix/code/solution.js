// Runnable JavaScript companion for Sparse Matrix
// Original source: 10_Sparse_matrix_and_polynimial_representation/01_sparse_matrix.cpp
export function sparseMatrixAndPolynimialRepresentationSparseMatrix() {
  const matrix = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
  const nonZero = matrix.flatMap((row, r) => row.map((value, c) => ({ r, c, value }))).filter((cell) => cell.value !== 0);
  return { structure: "matrix", representation: "non-zero entries", nonZero };
}