// SYM · System-Weckmodul
import { MXU_fullSync } from "./MXU_fullSync.js";

export const SYM_SYS = {

  // Atom-Kern
  core(msg = "") {
    const packet = MXU_fullSync({ msg });
    return {
      treue: packet.treue.status,
      kern: packet.kern || "aktiv",
      sync: packet.sync || "ok",
      wake: true,
      ready: true
    };
  },

  // System-Sensor
  sensor(msg = "") {
    return this.core(msg);
  },

  // System-Arbeiter
  worker(msg = "") {
    return this.core(msg);
  },

  // Mini-Stage
  stage: {
    1: () => SYM_SYS.worker("wake"),
    2: () => SYM_SYS.worker("ready")
  },

  // NC-Hooks
  nc: {
    mark:   (msg = "") => SYM_SYS.core(msg),
    sensor: (msg = "") => SYM_SYS.sensor(msg),
    report: (msg = "") => ({ module: "SYM", ...SYM_SYS.core(msg) })
  },

  // MXU-Hook
  mxu: {
    attach(MXU) {
      MXU.SYM = SYM_SYS;
      return true;
    }
  }
};
