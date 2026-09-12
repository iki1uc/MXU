// NC → META (echte Meta-Schicht, leicht, frei, strukturiert)

export const NC_META = {

    // Grunddaten über NC
    id: "NC",
    type: "meta",
    version: "1.0.0",
    info: "NC → Meta-Schicht aktiv",

    // Vollkreis-Meta (9 Zeichen)
    symbols: {
        "◉": { name: "origin", group: "base" },
        "3":  { name: "start", group: "flow" },
        "9":  { name: "end", group: "flow" },
        "◎": { name: "core", group: "center" },
        "◆": { name: "root", group: "base" },
        "△": { name: "layer", group: "structure" },
        "27": { name: "height", group: "structure" },
        "▣": { name: "space", group: "dimension" },
        "↺": { name: "repeat", group: "cycle" }
    },

    // Achsen-Meta
    axis: {
        X: "neutral / layer",
        Y: "left / start",
        Z: "right / end",
        "O/H": "orbit / core"
    },

    // EVO-Meta
    evo: {
        1: "raw",
        2: "map",
        3: "layer",
        4: "meta",
        5: "evo"
    },

    // Meta-Funktionen
    getSymbolMeta(symbol) {
        return this.symbols[symbol] || null;
    },

    getAxisMeta(axis) {
        return this.axis[axis] || null;
    },

    getEvoMeta(level) {
        return this.evo[level] || null;
    }
};

