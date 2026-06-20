// Runnable JavaScript companion for Sparse Matrix Using C++
// Original source: 08_sparse_matrix/03_sparse_matrix_using_c++.cpp
export function sparseMatrixSparseMatrixUsingCCpp() {
  const matrix = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
  const nonZero = matrix.flatMap((row, r) => row.map((value, c) => ({ r, c, value }))).filter((cell) => cell.value !== 0);
  return { structure: "matrix", representation: "non-zero entries", nonZero };
}