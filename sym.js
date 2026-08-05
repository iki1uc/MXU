// sym.js
// Liefert den Systemtreue-Status aus MXU_fullSync

import { MXU_fullSync } from "./MXU_fullSync.js";

export function SYM(msg = "") {

    // MXU_fullSync ausführen
    const packet = MXU_fullSync({ msg });

    // Systemtreue-Status zurückgeben
    return packet.treue.status;
}
