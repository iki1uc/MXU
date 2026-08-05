// MXU_TREUE.js
export const MXU_TREUE = (() => {

    const history = [];
    let score = 0;

    const RULES = {
        OK:   (px, meta, axis, nc) => px && meta && axis && nc,
        HOT:  (px, meta)           => px && meta && !axis,
        MISS: (px)                 => px && !meta,
        FAIL: ()                   => true
    };

    function getStatus(px, meta, axis, nc) {
        if (RULES.OK(px, meta, axis, nc))  return "OK";
        if (RULES.HOT(px, meta))           return "HOT";
        if (RULES.MISS(px))                return "MISS";
        return "FAIL";
    }

    function accept(packet = {}) {

        const entry = {
            time: Date.now(),
            input: packet.input || "",
            px: packet.px || null,
            meta: packet.meta || null,
            axis: packet.axis || null,
            nc: packet.nc || null
        };

        entry.status = getStatus(entry.px, entry.meta, entry.axis, entry.nc);

        if (entry.status === "OK")  score += 2;
        if (entry.status === "HOT") score += 1;
        if (entry.status === "MISS") score += 0;
        if (entry.status === "FAIL") score -= 1;

        history.push(entry);

        return entry;
    }

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

    return {
        accept,
        getTreue
    };

})();
