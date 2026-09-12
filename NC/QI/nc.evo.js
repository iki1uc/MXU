// NC → EVO-Kern (klein, frei, evolvierend)

export function NC_evo(input = {}) {
    console.log("NC → evo()");

    // Vollkreis-Symbole (9 Zeichen)
    const circle = {
        "◉": "origin",
        "3": "start",
        "9": "end",
        "◎": "core",
        "◆": "root",
        "△": "layer",
        "27": "height",
        "▣": "space",
        "↺": "repeat"
    };

    // Achsen-Logik
    const axis =
        input.symbol === "3" ? "Y" :
        input.symbol === "9" ? "Z" :
        input.symbol === "◎" ? "O/H" :
        input.symbol === "△" ? "X" :
        "X";

    // Bedeutung
    const meaning = input.symbol ? circle[input.symbol] || "unknown" : null;

    return {
        id: "NC",
        type: "evo",
        status: "OK",

        // Vollkreis
        symbol: input.symbol || null,
        meaning,

        // Achse
        axis,

        // Evolutions-Level
        evo: input.evo || 1,

        // Zeit
        timestamp: Date.now(),

        // Zusatz (frei)
        ...input
    };
}

