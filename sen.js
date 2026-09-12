// sen.js
export function SEN(level = 1) {
  return {
    module: "sen",

    // 3-fach gestaffelte Energien
    mana: [level * 1.25, level * 1.50, level * 1.75],   // kur
    aura: [level * 0.90, level * 1.00, level * 1.10],   // syn
    zen:  [level * 0.75, level * 0.80, level * 0.85],   // pass

    cycle: 3
  };
}
