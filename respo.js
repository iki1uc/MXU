export function processTXT(msg) {
  const tokens = msg.split(/\s+/);

  const meta = {
    hasPX: tokens.some(t => t.toUpperCase().includes("PX")),
    rawLevel: tokens.some(t => t.toUpperCase().includes("RAW")) ? "RAW-REAL" : "RAW-NONE",
    ghost: tokens.some(t => t.toLowerCase().includes("ghost")) ? "ghost-signal" : "ghost-none",
    sinn: tokens.some(t => t.toLowerCase().includes("7sinn")) ? "7sinn-ready" : "7sinn-none",
    vec: tokens.some(t => t.toUpperCase().includes("VEC")) ? "VEC-PX" : "VEC"
  };

  return { msg, tokens, meta };
}
