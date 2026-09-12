// nix.js — Vollkreis‑Pfad‑Scanner (pure engine)

export function scan404(url, status) {

    // 1) PFAD-EBENE
    const pfad = {
        left: url.includes("/y/"),
        right: url.includes("/z/"),
        depth: (url.match(/\//g) || []).length,
        layer: url.split("/").length,
        root: url.startsWith("/")
    };

    // 2) ACHSEN-EBENE
    let achse = "—";
    if (["OK","READY","FIXED","DONE"].includes(status)) achse = "Y/Z";
    if (["HELP","UNCLEAR"].includes(status)) achse = "X";
    if (["ERROR","QI","FC","CORE"].includes(status)) achse = "O/H";

    // 3) KERN-EBENE
    const kern = {
        origin: achse === "O/H",
        core: achse === "O/H"
    };

    // 4) VOLLKREIS-EBENE (Position beziehen)
    const vollkreis = {
        "Y/Z": ["◉","3","9","◎"],
        "X":   ["◎","△","▣"],
        "O/H": ["◉","◎","◆","△","↺"],
        "—":   []
    }[achse];

    // 5) POSITIONEN (Uhrzeit / Lebensnoten)
    const position = {
        "◉": "00:00",
        "3": "03:00",
        "◎": "06:00",
        "9": "09:00",
        "◆": "12:00",
        "△": "15:00",
        "27": "21:00",
        "▣": "24:00",
        "↺": "RESET"
    };

    return {
        pfad,
        achse,
        kern,
        vollkreis,
        uhrzeit: vollkreis.map(v => position[v] || "--:--")
    };
}
