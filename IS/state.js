export function IS_state() {
    console.log("IS → state()");

    return {
        id: "IS",
        type: "state",
        status: "OK",
        level: 2,
        timestamp: Date.now(),
        info: "IS → State-Move erfolgreich ausgeführt"
    };
}
