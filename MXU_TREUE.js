export const MXU_TREUE = (() => {

    const history = [];

    function getStatus(px, meta, axis, nc) {
        if (!px) return "INSTABIL";
        if (!meta) return "INSTABIL";
        if (!axis) return "NEUTRAL";
        if (!nc) return "NEUTRAL";
        return "TREU";
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

        history.push(entry);

        return entry;
    }

    function getTreue() {
        const last = history.slice(-1)[0];
        return {
            status: last?.status || "INSTABIL",
            last: history.slice(-10)
        };
    }

    return {
        accept,
        getTreue
    };

})();
