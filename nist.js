export function nist(input) {
  return {
    core: input[0] || "n",   // aktives Zeichen
    axis: "AX",              // Achse
    vector: "MX",            // Bewegung
    kernel: "NC",            // Mitte
    text: "TXT",             // d e i n o r s u w
    room: 81,                // Zyklus
    max: 2268,               // bewusster Bereich
    ready: true
  };
}
