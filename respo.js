export function RESPO(px) {
    return {
        tokens: px.tokens || [],
        ghost: px.meta?.ghost || "none",
        sinn: px.meta?.sinn || "none",
        info: "RESPO → Meta stabilisiert"
    };
}
