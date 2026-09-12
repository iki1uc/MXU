export function IU_move(symbol = null) {
    console.log("IU → move()");

    const map = {
        "◉": "Ursprung",
        "3": "Anfang",
        "9": "Ende",
        "◎": "Kern",
        "◆": "Root",
        "△": "Ebene",
        "27": "Höhe",
        "▣": "Raum",
        "↺": "Wiederholung"
    };

    return {
        id: "IU",
        type: "move",
        status: "OK",

        // ursprüngliche Info bleibt
        info: "IU → Move erfolgreich ausgeführt",

        // neue Fähigkeit: alle 9 Zeichen deuten
        symbol: symbol,
        meaning: symbol ? map[symbol] || "Unbekannt" : null,

        // IU bleibt frei, aber kann mehr
        axis: symbol === "3" ? "Y" :
              symbol === "9" ? "Z" :
              symbol === "◎" ? "O/H" :
              "X"
    };
}
