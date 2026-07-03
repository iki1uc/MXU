import { PXGateSync } from "./PXGateSync.js";

const px = new PXGateSync();

export function MXU_fromPX(msg) {
    const pxOut = px.sync(msg);
    return {
        px: pxOut,
        status: "PX→MXU OK"
    };
}

