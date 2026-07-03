// IMPORTS
import { PXGateSync } from "./PXGateSync.js";
import { processTXT } from "./respo.js";
import { evoImprove } from "./nc.evo.js";

// HISTORY
let evoHistory = [];

// 7-Layer Stabilität
const MXU_layers = [
    "PX",
    "AXINXA",
    "RESPO",
    "NC",
    "MX",
    "UX",
    "XA"
];

// Dashboard
function MXU_dashboard(packet) {
    return {
        ui: "MXU-Dashboard",
        time: Date.now(),
        layers: MXU_layers,
        packet
    };
}

// Full-Sync
function MXU_fullSync(packet) {
    return {
        sync: true,
        time: Date.now(),
        packet
    };
}

// PX-Gate
const pxGate = new PXGateSync();


// ⭐ fromPX v6 — ALLES NEUE DRIN
export async function fromPX(input) {
    const msg = input.msg || "";

    // 1) PX-Gate Verarbeitung
    const pxOut = pxGate.sync(msg);

    // 2) RESPO Verarbeitung
    const respoOut = processTXT({ msg });

    // 3) EVO History
    const evoItem = {
        in: msg,
        px: pxOut,
        respo: respoOut,
        time: Date.now()
    };

    evoHistory.push(evoItem);

    // 4) EVO Verbesserung
    const evoOut = evoImprove(evoHistory);

    // 5) Full-Sync Paket
    const syncOut = MXU_fullSync({
        px: pxOut,
        respo: respoOut,
        evo: evoOut,
        evoCount: evoHistory.length
    });

    // 6) Dashboard
    const dash = MXU_dashboard(syncOut);

    // 7) Finale Ausgabe
    return {
        status: "OK",
        msg,
        px: pxOut,
        respo: respoOut,
        evo: evoOut,
        evoCount: evoHistory.length,
        sync: syncOut,
        dashboard: dash
    };
}
