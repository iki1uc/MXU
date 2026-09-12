export function evoImprove(history = []) {
  const last = history[history.length - 1] || {};

  const isTMP81 =
    last.mode === "or3" ||
    last.mode === "or9" ||
    last.mode === "or81";

  const dyn = {
    bewegung: last.atom?.dir || "none",
    anker: last.atom?.stable || false,
    welle: last.atom?.wave || 0,
    magnet: last.atom?.mag || 0,
    grav: last.atom?.grav || { dir: "none", force: 0 },
    zug: last.atom?.pull || 0,
    abstoss: last.atom?.push || 0,
    singular: last.atom?.singularity || false,
    tmp81: isTMP81
  };

  return {
    dyn,
    basedOn: last,
    ready: true
  };
}
