export const AXINXA = {

    attach(mxu) {
        this.mxu = mxu;
    },

    runAll() {
        const treue = this.mxu?.treue || [];
        const status = this.mxu?.status || "UNSET";

        return {
            AX: {
                move: treue[0] || null,
                depth: treue.length,
                center: 9
            },

            IS: {
                state: status,
                stable: status === "STABIL"
            },

            XA: {
                return: treue.slice(-1)[0] || null,
                loop: 8
            },

            ROLE: this.resolveRole(status)
        };
    },

    runNew() {
        const treue = this.mxu?.treue || [];
        const status = this.mxu?.status || "UNSET";

        return {
            MX: {
                impulse: treue.length * 3,
                direction: "forward"
            },

            UX: {
                identity: status,
                layer: treue.length
            },

            IU: {
                usable: status === "TRue",
                last: treue.slice(-1)[0] || null
            },

            ROLE: this.resolveRole(status)
        };
    },

    resolveRole(status) {
        switch (status) {
            case "ready":     return { id: "R0",  type: "READY" };
            case "logikal":   return { id: "R1",  type: "LOGIKAL" };
            case ")3(())9(":  return { id: "R2",  type: "AXIS" };
            case "mind":      return { id: "R3",  type: "MIND" };
            case "MODE1":     return { id: "R4",  type: "PC" };
            case "MODE2":     return { id: "R5",  type: "PX" };
            case "MODE3":     return { id: "R6",  type: "IN_OUT" };
            case "MODE4":     return { id: "R7",  type: "BUND" };
            case "MODE5":     return { id: "R8",  type: "VERBUND" };
            case "TRue":      return { id: "R9",  type: "TREUE" };
            default:          return { id: "R?",  type: "UNSET" };
        }
    }
};
