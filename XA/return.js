// NC/suite.move — Suite Move Engine (MXU)

import { MX_move } from "../UX/ux.js";

export function NC_suiteMove(suite) {

    // Suite = Array aus 3 Räumen
    const moves = suite.map(room => {
        const mv = MX_move();

        return {
            id: mv.id,
            type: mv.type,
            status: mv.status,
            px: room.px,
            meta: room.meta,
            timestamp: mv.timestamp ?? Date.now(),
            info: mv.info
        };
    });

    // Suite-Synchronisierung (MAXI-Move)
    const suiteMove = {
        id: "SUITE",
        type: "move",
        status: "OK",
        count: moves.length,
        timestamp: Date.now(),
        info: "Suite-Move erfolgreich synchronisiert"
    };

    return {
        type: "NC-suite-move",
        time: Date.now(),
        moves,
        suiteMove
    };
}
