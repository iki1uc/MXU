export function RESPO(px = {}) {

    // Fallbacks für alle Eventualitäten
    const tokens = Array.isArray(px.tokens) ? px.tokens : [];
    const ghost  = px.meta?.ghost ?? "none";
    const sinn   = px.meta?.sinn ?? "none";

    // System-Bereitschaft
    const ready = ghost !== "none" || sinn !== "none" || tokens.length > 0;

    return {
        tokens,
        ghost,
        sinn,
        ready,
        info: "RESPO → Meta stabilisiert & freier Fall verhindert"
    };
}
