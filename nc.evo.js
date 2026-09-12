export function evoImprove(history = []) {
  const last = history[history.length - 1] || {};

  const dyn = {
    bewegung: last.atom?.dir || "none",
    anker: last.atom?.stable || false,
    welle: last.atom?.wave || 0,
    magnet: last.atom?.mag || 0,
    grav: last.atom?.grav || { dir: "none", force: 0 },
    zug: last.atom?.pull || 0,
    abstoss: last.atom?.push || 0,
    singular: last.atom?.singularity || false
  };

  return {
    dyn,
    basedOn: last,
    ready: true
  };
}
