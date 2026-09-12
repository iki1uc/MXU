export const MXU_CONTENT = (() => {

    function statusMap(status) {
        switch (status) {
            case "ready":     return { level: 0, tag: "INIT" };
            case "logikal":   return { level: 1, tag: "LOGIK" };
            case ")3(())9(":  return { level: 2, tag: "AXIS" };
            case "mind":      return { level: 3, tag: "NC" };
            case "MODE1":     return { level: 4, tag: "PX-PC" };
            case "MODE2":     return { level: 5, tag: "PX" };
            case "MODE3":     return { level: 6, tag: "IN/OUT" };
            case "MODE4":     return { level: 7, tag: "BUND" };
            case "MODE5":     return { level: 8, tag: "VERBUND" };
            case "TRue":      return { level: 9, tag: "TREUE" };
            case "STABIL":    return { level: 10, tag: "STABIL" };
            default:          return { level: -1, tag: "UNDEF" };
        }
    }

    const handlers = {

        ATOM: (t) => ({
            type: "ATOM",
            kern: t.last?.[0] || null,
            stabil: t.status === "STABIL",
            tiefe: t.last?.length || 0,
            mode: statusMap(t.status)
        }),

        MARKT: (t) => ({
            type: "MARKT",
            breite: Object.keys(t).length,
            impulse: t.last || [],
            trend: t.status,
            eco: t.status === "TRue" ? "positiv" : "neutral",
            mode: statusMap(t.status)
        }),

        BOERSE: (t) => ({
            type: "BOERSE",
            flux: (t.last?.length || 0) * 9,
            richtung: t.status === "TRue" ? "↑" : "↓",
            tiefe: t.last?.slice(-1)[0] || null,
            mode: statusMap(t.status)
        }),

        PYRA: (t) => ({
            type: "PYRA",
            layer: t.last?.length || 0,
            struktur: t.last?.map((e, i) => ({ index: i, value: e })),
            tiefe: t.status === "STABIL" ? 3 : 1,
            mode: statusMap(t.status)
        }),

        SELF: (t) => ({
            type: "SELF",
            identitaet: t.status,
            treue: t.last?.length || 0,
            muster: t.last || [],
            mode: statusMap(t.status)
        }),

        TOOL: (t) => ({
            type: "TOOL",
            nutzbar: t.status === "TRue",
            letzteAktion: t.last?.slice(-1)[0] || null,
            mode: statusMap(t.status)
        })
    };

    function render(name, treue) {
        const fn = handlers[name];
        if (!fn) return { type: name, error: "Kein Handler" };
        return fn(treue);
    }

    return { render };

})();
