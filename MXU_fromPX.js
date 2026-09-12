import { PXGateSync } from "./PXGateSync.js";

const px = new PXGateSync();

// 9 verschiedene PX‑Optionen
const PX_OPTIONS = ["IN", "OUT", "PC", "PQ", "A", "B", "C", "D", "E"];

export function MXU_fromPX(msg) {

    const results = [];

    for (const opt of PX_OPTIONS) {
        const pxOut = px.sync(msg, opt);
        results.push({
            option: opt,
            px: pxOut
        });
    }

    return {
        status: "PX→MXU 9x OK",
        count: results.length,
        results
    };
}
