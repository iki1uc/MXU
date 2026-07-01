// MXU.js – komplette stabile Version

export const MXU = {

    // -----------------------------------------
    // 1) INIT – Root-View
    // -----------------------------------------
    init(id) {
        const root = document.getElementById(id);

        if (!root) {
            console.error("MXU.init → Root nicht gefunden:", id);
            return;
        }

        root.innerHTML = `
            <div style="
                padding:20px;
                background:#001100;
                color:#00ff55;
                font-family:monospace;
                border:2px solid #00ff55;
                margin-bottom:10px;
            ">
                MXU Root aktiv
            </div>
        `;

        console.log("MXU → Root gestartet:", id);
    },


    // -----------------------------------------
    // 2) CHANNEL – Spezialmodus (Zoom / Beam / Gate)
    // -----------------------------------------
    channel(id) {
        const ch = document.getElementById(id);

        if (!ch) {
            console.error("MXU.channel → Channel nicht gefunden:", id);
            return;
        }

        ch.innerHTML = `
            <div style="
                padding:20px;
                background:#000a00;
                color:#55ff00;
                font-family:monospace;
                border:2px solid #55ff00;
                margin-bottom:10px;
            ">
                MXU Channel aktiv
            </div>
        `;

        console.log("MXU → Channel gestartet:", id);
    },


    // -----------------------------------------
    // 3) ATTACH – Achsen-System ankoppeln
    // -----------------------------------------
    attachAxis(axisObj) {
        this._axis = axisObj;
        console.log("MXU → Achsen-System gekoppelt:", axisObj);
    },


    // -----------------------------------------
    // 4) INSTANZEN – Root / Axis / Room
    // -----------------------------------------
    inst(id) {
        const el = document.getElementById(id);

        if (!el) {
            console.error("MXU.inst → Instanz nicht gefunden:", id);
            return null;
        }

        console.log("MXU → Instanz geladen:", id);
        return el;
    }
};
