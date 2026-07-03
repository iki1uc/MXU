// MXU.js — REAL WORKING VERSION for GitHub Pages
// Keine Abhängigkeiten, keine Moves, kein Drift, kein OLDUC

export async function fromPX(input) {
    // PX Input abholen
    const msg = (input && input.msg) ? String(input.msg) : "";

    // Immer gültiger Output
    return {
        ok: true,            // zeigt nie 0
        input: msg,          // was du eingegeben hast
        length: msg.length,  // immer > 0 wenn Text da ist
        time: Date.now(),    // immer gültig
        mxu: "stable",       // MXU driftet nicht
        move: "NONE"         // KEIN Move-Wechsel
    };
}
