// MXU_TREUE.js
// Systemtreue-Modul für MXU
// Bewertet jede Meldung aus MXU_fullSync und markiert sie als:
// OK, HOT, MISS, FAIL

export const MXU_TREUE = (() => {

    // interne Treue-Datenbank
    const history = [];

    // Systemtreue-Score
    let score = 0;

    // Status-Regeln
    const RULES = {
        OK:   (px, meta, axis, nc) => px && meta && axis && nc,
        HOT:  (px, meta)           => px && meta && !axis,
        MISS: (px)                 => px && !meta,
        FAIL: ()                   => true
    };

    // Status bestimmen
    function getStatus(px, meta, axis, nc) {

        if (RULES.OK(px, meta, axis, nc))  return "OK";
        if (RULES.HOT(px, meta))           return "HOT";
        if (RULES.MISS(px))                return "MISS";
        return "FAIL";
    }

    // Meldung verarbeiten
    function accept(syncPacket = {}) {

        const entry = {
            time: Date.now(),
            input: syncPacket.input || "",
            px: syncPacket.px || null,
            meta: syncPacket.meta || null,
            axis: syncPacket.axis || null,
            nc: syncPacket.nc || null
        };

        // Status bestimmen
        entry.status = getStatus(entry.px, entry.meta, entry.axis, entry.nc);

        // Score erhöhen
        if (entry.status === "OK")  score += 2;
        if (entry.status === "HOT") score += 1;
        if (entry.status === "MISS") score += 0;
        if (entry.status === "FAIL") score -= 1;

        // speichern
        history.push(entry);

        return entry;
    }

    // Systemtreue abrufen
    function getTreue() {
        return {
            score,
            status: score > 10 ? "STABIL"
                  : score > 0  ? "TREU"
                  : score === 0 ? "NEUTRAL"
                  : "INSTABIL",
            last: history.slice(-10)
        };
    }

    // Reset
    function reset() {
        history.length = 0;
        score = 0;
    }

    return {
        accept,
        getTreue,
        reset
    };

})();
