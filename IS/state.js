export function IS_state(extra = {}) {
    console.log("IS → state()");

    return {
        id: "IS",
        type: "state",
        status: "OK",
        level: 2,
        timestamp: Date.now(),

        // ursprüngliche Info bleibt
        info: "IS → State-Move erfolgreich ausgeführt",

        // neue leichte Fähigkeiten
        mode: "state",
        stable: true,
        axis: "X",
        impulse: 1,

        // NC-Regel: optionaler Zusatz
        ...extra
    };
}
