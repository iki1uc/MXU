// SA · Energie-Systemmodul
import { SA } from "./sa.js";

export const SA_SYS = {

  // Atom-Kern
  core(level = 1) {
    return SA(level);
  },

  // System-Sensor
  sensor(level = 1) {
    const s = SA(level);
    return {
      mana: s.mana,
      aura: s.aura,
      zen: s.zen,
      cycle: s.cycle,
      atom: true
    };
  },

  // System-Arbeiter
  worker(level = 1) {
    return this.sensor(level);
  },

  // Mini-Stage
  stage: {
    1: () => SA_SYS.worker(1),
    2: () => SA_SYS.worker(2),
    3: () => SA_SYS.worker(3)
  },

  // NC-Hooks
  nc: {
    mark:   (lvl = 1) => SA(lvl),
    sensor: (lvl = 1) => SA_SYS.sensor(lvl),
    report: (lvl = 1) => ({ module: "SA", ...SA(lvl) })
  },

  // MXU-Hook
  mxu: {
    attach(MXU) {
      MXU.SA = SA_SYS;
      return true;
    }
  }
};
