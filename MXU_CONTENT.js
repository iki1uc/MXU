// MXU_CONTENT.js (NEUE VERSION)
export const MXU_CONTENT = (() => {

    const handlers = {

        ATOM: (t) => ({
            type: "ATOM",
            kern: t.last?.[0] || null,
            stabil: t.status === "STABIL",
            tiefe: t.last?.length || 0
        }),

        MARKT: (t) => ({
            type: "MARKT",
            breite: Object.keys(t).length,
            impulse: t.last || [],
            trend: t.status,
            eco: t.status === "TREU" ? "positiv" : "neutral"
        }),

        BOERSE: (t) => ({
            type: "BOERSE",
            flux: t.last?.length * 9,
            richtung: t.status === "TREU" ? "↑" : "↓",
            tiefe: t.last?.slice(-1)[0] || null
        }),

        PYRA: (t) => ({
            type: "PYRA",
            layer: t.last?.length || 0,
            struktur: t.last?.map((e, i) => ({ index: i, value: e })),
            tiefe: t.status === "STABIL" ? 3 : 1
        }),

        SELF: (t) => ({
            type: "SELF",
            identitaet: t.status,
            treue: t.last?.length || 0,
            muster: t.last || []
        }),

        TOOL: (t) => ({
            type: "TOOL",
            nutzbar: t.status === "TREU",
            letzteAktion: t.last?.slice(-1)[0] || null
        })
    };

    function render(name, treue) {
        const fn = handlers[name];
        if (!fn) return { type: name, error: "Kein Handler" };
        return fn(treue);
    }

    return { render };

})();
