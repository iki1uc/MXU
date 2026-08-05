import { MXU_TREUE } from "./MXU_TREUE.js";
import { MXU_CONTENT } from "./MXU_CONTENT.js";

export function MXU_fullSync(packet = {}) {

    const treue = MXU_TREUE.accept({
        input: packet.msg || "",
        px: packet.px || null,
        meta: packet.meta || null,
        axis: packet.axis || null,
        nc: packet.nc || null
    });

    return {
        sync: true,
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
export function MXU_global() {
    return MXU_TREUE.getTreue();
}
