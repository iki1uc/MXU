export function AX_forward() {
    console.log("AX → forward()");

    return {
        id: "AX",
        type: "forward",
        status: "OK",
        level: 1,
        timestamp: Date.now(),
        info: "AX → Forward-Move erfolgreich ausgeführt"
    };
}
