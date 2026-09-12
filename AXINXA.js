// AXINXA – neue MXU‑Version
export const AXINXA = {

    attach(mxu) {
        this.mxu = mxu;
    },

    runAll() {
        const data = this.mxu?.treue || [];

        return {
            AX: {
                move: data[0] || null,
                depth: data.length,
                center: 9   // temporärer Rechenpunkt
            },

            IS: {
                state: this.mxu?.status || "UNSET",
                stable: this.mxu?.status === "STABIL"
            },

            XA: {
                return: data.slice(-1)[0] || null,
                loop: 8    // realer Loop
            }
        };
    },

    runNew() {
        const data = this.mxu?.treue || [];

        return {
            MX: {
                impulse: data.length * 3,
                direction: "forward"
            },

            UX: {
                identity: this.mxu?.status || "UNSET",
                layer: data.length
            },

            IU: {
                usable: this.mxu?.status === "TREU",
                last: data.slice(-1)[0] || null
            }
        };
    }
};
