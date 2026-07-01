import { AX_forward } from "./AX/forward.js";
import { IS_state } from "./IS/state.js";
import { XA_return } from "./XA/return.js";

import { MX_move } from "./MX/mx.js";
import { UX_move } from "./UX/ux.js";
import { IU_move } from "./IU/iu.js";

export const AXINXA = {

    attach(mxu) {
        console.log("AXINXA → an MXU gekoppelt");
        this.mxu = mxu;
        this.runAll();
        this.runNew();
    },

    runAll() {
        console.log("AX:", AX_forward());
        console.log("IS:", IS_state());
        console.log("XA:", XA_return());
    },

    runNew() {
        console.log("MX:", MX_move());
        console.log("UX:", UX_move());
        console.log("IU:", IU_move());
    }
};
