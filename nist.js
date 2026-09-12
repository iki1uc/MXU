export function nist(atom) {

  return {
    axis: ["W", "A", "S", "D"],     // 4 Achsen
    quad: 90,                      // Quadranten
    full: 360,                     // Vollrotation
    cycle: 81,                     // 9×9 Zyklus
    core: atom || "n",             // aktives Zeichen
    move: "ATOM",                  // Bewegung aktiv
    ready: true
  };
}
NC.SENSOR = function(px = {}) {
  return {
    NIST: nist(px.atom),
    ok: true
  };
};
