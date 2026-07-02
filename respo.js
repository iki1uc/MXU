// respo.js
export function processTXT(txt) {
  const msg = txt.msg || "";

  return {
    raw: txt,
    msg,
    tokens: msg.split(/\s+/),
    meta: {
      hasPX: msg.toLowerCase().includes("px"),
      hasQuestion: msg.includes("?"),
      ghost: msg.length > 12 ? "ghost-signal" : "none",
      sinn: msg.split(" ").length >= 3 ? "7sinn-ready" : "low"
    }
  };
}
