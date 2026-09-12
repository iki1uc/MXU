// MXU_CONTENT.js
export const MXU_CONTENT = (() => {

    // Jede Kategorie ist jetzt eine FUNKTION,
    // die Treue-Daten verarbeitet und atomisch zurückgibt.
    const handlers = {

        ATOM:  (t) => ({
            type: "ATOM",
            core: t.status,
            stamp: t.last?.[0]?.time || null
        }),

        DOM:   (t) => ({
            type: "DOM",
            active: t.status === "TREU",
            nodes: t.last?.length || 0
        }),

        EVO:   (t) => ({
            type: "EVO",
            evolve: t.status === "STABIL",
            history: t.last
        }),

        EOS:   (t) => ({
            type: "EOS",
            end: t.status === "INSTABIL",
            reason: t.last?.slice(-1)[0] || null
        }),

        MARKT: (t) => ({
            type: "MARKT",
            trend: t.status,
            moves: t.last?.length || 0
        }),

        BOERSE:(t) => ({
            type: "BOERSE",
            flux: t.status === "TREU",
            delta: t.last?.length || 0
        }),

        FUNK:  (t) => ({
            type: "FUNK",
            signal: t.status,
            ping: Boolean(t.last?.length)
        }),

        RESPO: (t) => ({
            type: "RESPO",
            response: t.status,
            last: t.last?.slice(-1)[0] || null
        }),

        PYRA:  (t) => ({
            type: "PYRA",
            level: t.status,
            stack: t.last
        }),

        SELF:  (t) => ({
            type: "SELF",
            identity: t.status,
            echo: t.last?.slice(-1)[0] || null
        }),

        TOOL:  (t) => ({
            type: "TOOL",
            usable: t.status !== "INSTABIL",
            meta: t.last
        })
    };

    // FUNKTION statt Template
    function render(name, treue) {
        const fn = handlers[name];
        if (!fn) return { type: name, error: "Kein Handler" };
        return fn(treue);
    }

    return { render };

})();
