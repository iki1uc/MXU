// NC → KlicK(((( ))))ZaM(((( )))) → Token-Umrechnung

import { NC_TOKENS } from "./nc.tokens.js";

export function KLICk_ZaM(symbol, mode = "X", mark = "ni") {

    console.log("NC → KlicK(((( ))))ZaM(((( ))))");

    // 1) KlicK → Symbol aktivieren
    const raw = NC_TOKENS.base[symbol];
    if (raw === undefined) return {
        error: "Symbol nicht erkannt",
        symbol
    };

    // 2) ZaM → Zusammenziehen
    const xyx = NC_TOKENS.xyx[mode] ?? 0;
    const m   = NC_TOKENS.marker[mark] ?? 0;

    // 3) Token → deine Währung
    const total = raw + xyx + m;

    return {
        symbol,
        raw,
        xyx,
        marker: m,
        total,
        info: "KlicK(((( ))))ZaM(((( )))) → Token erfolgreich erzeugt"
    };
}

