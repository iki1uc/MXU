import { processTXT } from "./respo.js";
import { evoImprove } from "./nc.evo.js";

let evoHistory = [];

export async function fromPX(input) {
    const txt = input.msg || "";
    
    // RESPO verarbeitet PX
    const respoOut = processTXT({ msg: txt });

    // EVO-Eintrag
    const evoItem = {
        in: txt,
        respo: respoOut,
        time: Date.now()
    };

    evoHistory.push(evoItem);

    // EVO-Verbesserung
    const evoOut = evoImprove(evoHistory);

    return {
        status: "OK",
        last: evoItem,
        evo: evoOut,
        evoCount: evoHistory.length
    };
}
