// sa.js
export function SA(level = 1) {
  return {
    module: "sa",

    mana: [level * 1.00, level * 1.10, level * 1.20],   // kur
    aura: [level * 1.50, level * 1.75, level * 2.00],   // syn
    zen:  [level * 0.80, level * 0.90, level * 1.00],   // pass

    cycle: 9
  };
}
