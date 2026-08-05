// MXU_fullSync.js
import { MXU_TREUE } from "./MXU_TREUE.js";
import { MXU_CONTENT } from "./MXU_CONTENT.js";
import { AXINXA } from "./AXINXA.js";
import { NC } from "./NC/nc.js";
import { processTXT } from "./txt/raw.txt";

export function MXU_fullSync(packet = {}) {

    const msg = String(packet.msg || "");
    const time = Date.now();

    // TXT → PX
    const px = processTXT({ msg });

    // META (RESPO entfernt)
    const meta = {
        origin: "MXU",
        msg,
        pxType: typeof px,
        time
    };

    // AXINXA
    const axis = {
        AX: AXINXA.runAll(),
        NEW: AXINXA.runNew()
    };

    // NC
    const nc = NC(px, meta);

    // Systemtreue
    const treue = MXU_TREUE.accept({
        input: msg,
        px,
        meta,
        axis,
        nc
    });

    return {
        sync: true,
        time,
        input: msg,
        px,
        meta,
        axis,
        nc,
        treue,

        content: {
            ATOM:  MXU_CONTENT.render("ATOM", treue),
            DOM:   MXU_CONTENT.render("DOM", treue),
            EVO:   MXU_CONTENT.render("EVO", treue),
            EOS:   MXU_CONTENT.render("EOS", treue),
            MARKT: MXU_CONTENT.render("MARKT", treue),
            BOERSE:MXU_CONTENT.render("BOERSE", treue),
            FUNK:  MXU_CONTENT.render("FUNK", treue),
            RESPO: MXU_CONTENT.render("RESPO", treue),
            PYRA:  MXU_CONTENT.render("PYRA", treue),
            SELF:  MXU_CONTENT.render("SELF", treue),
            TOOL:  MXU_CONTENT.render("TOOL", treue)
        }
    };
}
