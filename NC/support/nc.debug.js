// NC → DEBUG (MXU-Debug-Schicht)

import { NC_TOKENS } from "../core/nc.tokens.js";

export const NC_DEBUG = {

    // 1) Debug: Symbol prüfen
    symbol(symbol) {
        const exists = NC_TOKENS.base[symbol] !== undefined;
        return {
            symbol,
            exists,
            raw: exists ? NC_TOKENS.base[symbol] : null
        };
    },

    // 2) Debug: KlicK(((( ))))ZaM(((( ))))
    zam(symbol, mode = "X", mark = "ni") {
        const raw = NC_TOKENS.base[symbol];
        if (raw === undefined) {
            return { error: "Symbol nicht erkannt", symbol };
        }

        const xyx = NC_TOKENS.xyx[mode] ?? 0;
        const m   = NC_TOKENS.marker[mark] ?? 0;

        return {
            symbol,
            raw,
            xyx,
            marker: m,
            total: raw + xyx + m,
            reg: "KlicK(((( ))))ZaM(((( ))))"
        };
    },

    // 3) Debug: XyX anzeigen
    xyx() {
        return NC_TOKENS.xyx;
    },

    // 4) Debug: Marker anzeigen
    markers() {
        return NC_TOKENS.marker;
    },

    // 5) Debug: Voller Token
    full(symbol, mode = "X", mark = "ni") {
        return NC_TOKENS.full(symbol, mode, mark);
    }
};

