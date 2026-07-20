export const AXINXA = {

    attach(mxu) {
        this.mxu = mxu;
    },

    runAll() {
        return {
            AX: AX_forward(),
            IS: IS_state(),
            XA: XA_return()
        };
    },

    runNew() {
        return {
            MX: MX_move(),
            UX: UX_move(),
            IU: IU_move()
        };
    }
};
