export function processTXT({ msg }) {
  const tokens = msg.split(" ");

  return {
    tokens,
    meta: {
      ghost: tokens.includes("ghost") ? "ghost-signal" : "none",
      sinn: tokens.includes("sinn") ? "7sinn-ready" : "none"
    }
  };
}
