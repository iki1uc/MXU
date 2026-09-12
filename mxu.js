export async function fromPX(input) {
    const msg = (input && input.msg) ? String(input.msg) : "";

    const atom = {
        core: msg[0] || "n",
        dir: "n",
        cycle: 81,
        max: 2268
    };

    return {
        ok: true,
        input: msg,
        length: msg.length,
        time: Date.now(),
        mxu: "stable",
        move: "ATOM",
        atom
    };
}
