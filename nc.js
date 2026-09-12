export function OR3(a, mid, b) {
  return { in: a, mid, out: b, mode: "or3" };
}
export function OR9(list) {
  return { points: list, mode: "or9" };
}
export function OR81(matrix) {
  return { cycle: matrix, mode: "or81" };
}
