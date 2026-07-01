// AXINXA.js – Achsen-Logik für MXU

import { AX_forward } from "./AX/forward.js";
import { IS_state }   from "./IS/state.js";
import { XA_return }  from "./XA/return.js";

export const AXINXA = {

  // MXU ankoppeln
  attach(mxu) {
    console.log("AXINXA → an MXU gekoppelt");
    this.mxu = mxu;

    // optional Flag
    if (this.mxu) {
      this.mxu._axisAttached = true;
    }

    // Direkt einmal Achsen fahren
    this.runAll();
  },

  // alle drei Moves einmal durchfahren
  runAll() {
    const ax = AX_forward();
    const is = IS_state();
    const xa = XA_return();

    console.log("AXINXA → Ergebnisse:", { ax, is, xa });
  },

  // einzelne Achsen, falls du sie getrennt triggern willst
  runAX() {
    const ax = AX_forward();
    console.log("AXINXA → AX:", ax);
  },

  runIS() {
    const is = IS_state();
    console.log("AXINXA → IS:", is);
  },

  runXA() {
    const xa = XA_return();
    console.log("AXINXA → XA:", xa);
  }
};

