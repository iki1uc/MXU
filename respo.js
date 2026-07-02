meta: {
  hasQuestion: msg.includes("?"),
  hasPX: msg.toLowerCase().includes("px"),
  ghost: msg.includes("ghost") ? "ghost-signal" : "ghost-none",
  sinn: msg.includes("7sinn") ? "7sinn-ready" : "7sinn-none"
}
