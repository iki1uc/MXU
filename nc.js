export function OR3(a, mid, b) {
  return { in: a, mid, out: b, mode: "or3" };
}
export function OR9(list) {
  return { points: list, mode: "or9" };
}
export function OR81(matrix) {
  return { cycle: matrix, mode: "or81" };
}
NC.SENSOR = function(px = {}) {
  return {
    OR3: OR3(px.a, px.mid, px.b),
    OR9: OR9(px.list || []),
    OR81: OR81(px.matrix || []),
    ok: true
  };
};
