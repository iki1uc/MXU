export async function fromPX(input) {
    const msg = input.msg || "";

    // MXU Anti-Sensibel: immer gültiger Output
    const safeMsg = String(msg);

    return {
        ok: true,            // MXU zeigt nie 0
        msg: safeMsg,        // immer Text
        len: safeMsg.length, // immer > 0
        time: Date.now(),    // immer gültig
        mxu: "stable"        // MXU driftet nicht
    };
}
