// sym.js
import { MXU_fullSync } from "./MXU_fullSync.js";

export function SYM(msg = "") {

    // FullSync starten → System aufwecken
    const packet = MXU_fullSync({ msg });

    // Systemkern aktivieren
    const sys = {
        treue: packet.treue.status,
        kern: packet.kern || "aktiv",
        sync: packet.sync || "ok",
        wake: true,
        ready: true
    };

    return sys;
}
