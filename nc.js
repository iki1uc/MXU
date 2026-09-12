export function OR(a, b) {

    const lane = {
        from: a,
        to: b,
        impulse: a.impulse || 0,
        dir: a.dir || "none",
        atom: a.atom || null
    };

    return {
        in: a,
        out: b,
        lane,
        switch: true,
        mode: "or"
    };
}
