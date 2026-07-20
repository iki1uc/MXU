import { NC_raw } from "./core/nc.raw.js";
import { NC_tokens } from "./core/nc.tokens.js";
import { NC_meta } from "./core/nc.meta.js";
import { NC_history } from "./core/nc.history.js";
import { ncImprove } from "./evo/nc.evo.js";

export function NC(px, meta, history = []) {

    const raw = NC_raw(px, meta);
    const tokens = NC_tokens(px);
    const metaBlock = NC_meta(px);
    const hist = NC_history({ raw, tokens, metaBlock }, history);
    const evo = ncImprove(hist.history);

    return {
        raw,
        tokens,
        metaBlock,
        history: hist.history,
        evo,
        info: "NC → vollständige NC-Ausführung"
    };
}
