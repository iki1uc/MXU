// NC → RAW (9 Zeichen + XyX-Base + ni/up/axs Marker)

export const NC_RAW = {

    // 9 Vollkreis-Zeichen (roh)
    symbols: ["◉", "3", "9", "◎", "◆", "△", "27", "▣", "↺"],

    // XyX-Basis (Grundstruktur)
    base: {
        X: "neutral",
        y: "left",
        Z: "right"
    },

    // 3 Marker (ni / up / axs)
    marker: {
        ni: "inner",
        up: "outer",
        axs: "axis"
    },

    // Roh-Interpretation eines Symbols
    parse(symbol) {
        if (!this.symbols.includes(symbol)) return null;

        return {
            raw: symbol,
            xyx: this.base,
            marker: this.marker
        };
    }
};

