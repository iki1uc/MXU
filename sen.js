// SEN · Energie-Systemmodul
import { SEN } from "./sen.js";

export const SEN_SYS = {

  // Atom-Kern
  core(level = 1) {
    return SEN(level);
  },

  // System-Sensor
  sensor(level = 1) {
    const s = SEN(level);
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
    1: () => SEN_SYS.worker(1),
    2: () => SEN_SYS.worker(2),
    3: () => SEN_SYS.worker(3)
  },

  // NC-Hooks
  nc: {
    mark:   (lvl = 1) => SEN(lvl),
    sensor: (lvl = 1) => SEN_SYS.sensor(lvl),
    report: (lvl = 1) => ({ module: "SEN", ...SEN(lvl) })
  },

  // MXU-Hook
  mxu: {
    attach(MXU) {
      MXU.SEN = SEN_SYS;
      return true;
    }
  }
};
