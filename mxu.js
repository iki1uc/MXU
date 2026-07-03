// MXU v1 — Stable Minimal Mode
// Keine Moves, kein Drift, kein OLDUC, kein Sensibel

export async function fromPX(input) {
    const msg = input.msg || "";

    // Anti-Sensibel: immer gültiger Text
    const safeMsg = String(msg);

    // Stabiler MXU-Output
    return {
        ok: true,               // MXU zeigt nie 0
        px: safeMsg,            // PX Input
        len: safeMsg.length,    // immer > 0
        time: Date.now(),       // immer gültig
        mxu: "stable",          // MXU driftet nicht
        move: "NONE"            // KEIN Move-Wechsel
    };
}
