// Runnable JavaScript companion for Lower Triangular Matrix
// Original source: 07_Matrix/03_lower_triangular_matrix.c
export function matrixLowerTriangularMatrix() {
  const matrix = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
  const nonZero = matrix.flatMap((row, r) => row.map((value, c) => ({ r, c, value }))).filter((cell) => cell.value !== 0);
  return { structure: "matrix", representation: "non-zero entries", nonZero };
}