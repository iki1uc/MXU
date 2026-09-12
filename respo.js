// RESPO · Meta-Stabilisierungsmodul
import { RESPO } from "./respo.js";

export const RESPO_SYS = {

  // Atom-Kern
  core(px = {}) {
    return RESPO(px);
  },

  // System-Sensor
  sensor(px = {}) {
    const r = RESPO(px);
    return {
      tokens: r.tokens,
      ghost: r.ghost,
      sinn: r.sinn,
      ready: r.ready,
      atom: true
    };
  },

  // System-Arbeiter
  worker(px = {}) {
    return this.sensor(px);
  },

  // Mini-Stage
  stage: {
    1: () => RESPO_SYS.worker({ meta:{ ghost:"soft" } }),
    2: () => RESPO_SYS.worker({ meta:{ sinn:"klar" } }),
    3: () => RESPO_SYS.worker({ tokens:["A","B","C"] })
  },

  // NC-Hooks
  nc: {
    mark:   (px = {}) => RESPO(px),
    sensor: (px = {}) => RESPO_SYS.sensor(px),
    report: (px = {}) => ({ module:"RESPO", ...RESPO(px) })
  },

  // MXU-Hook
  mxu: {
    attach(MXU) {
      MXU.RESPO = RESPO_SYS;
      return true;
    }
  }
};
