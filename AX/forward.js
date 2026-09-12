export function AX_forward(extra = {}) {
    console.log("AX → forward()");

    return {
        id: "AX",
        type: "forward",
        status: "OK",
        level: 1,
        timestamp: Date.now(),

        // ursprüngliche Info bleibt
        info: "AX → Forward-Move erfolgreich ausgeführt",

        // neue leichte Fähigkeiten
        move: "forward",
        impulse: 3,
        axis: "Y",

        // NC-Regel: optionaler Zusatz
        ...extra
    };
}
