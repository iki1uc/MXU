export function MX_move(symbol = null) {
    console.log("MX → move()");

    // Vollkreis‑Matrix (9 Zeichen)
    const map = {
        "◉": { meaning: "Ursprung", depth: 0, height: 0, layer: 0 },
        "3": { meaning: "Anfang", depth: 1, height: 0, layer: 1 },
        "9": { meaning: "Ende", depth: 1, height: 0, layer: 2 },
        "◎": { meaning: "Kern", depth: 2, height: 0, layer: 3 },
        "◆": { meaning: "Root", depth: 3, height: 0, layer: 0 },
        "△": { meaning: "Ebene", depth: 0, height: 1, layer: 1 },
        "27": { meaning: "Höhe", depth: 0, height: 2, layer: 2 },
        "▣": { meaning: "Raum", depth: 1, height: 1, layer: 3 },
        "↺": { meaning: "Wiederholung", depth: 0, height: 0, layer: 0 }
    };

    const data = symbol ? map[symbol] || null : null;

    return {
        id: "MX",
        type: "move",
        status: "OK",

        // ursprüngliche Info bleibt
        info: "MX → Move erfolgreich ausgeführt",

        // neue Fähigkeit: alle 9 Zeichen deuten
        symbol: symbol,
        meaning: data ? data.meaning : null,

        // MX-spezifische Fähigkeiten
        depth: data ? data.depth : null,
        height: data ? data.height : null,
        layer: data ? data.layer : null,

        // MX bleibt frei, aber kann mehr
        axis:
            symbol === "3" ? "Y" :
            symbol === "9" ? "Z" :
            symbol === "◎" ? "O/H" :
            symbol === "△" ? "X" :
            "X"
    };
}
