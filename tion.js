// tion.js
export function TION(level = 1) {
  return {
    module: "tion",

    mana: [level * 0.75, level * 0.85, level * 0.95],   // kur
    aura: [level * 0.90, level * 1.00, level * 1.10],   // syn
    zen:  [level * 2.268, level * 2.500, level * 2.750], // pass

    cycle: 81
  };
}
