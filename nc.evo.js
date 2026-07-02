export function evoImprove(history) {
  const last = history[history.length - 1];

  const ghostEdit = last.respo.meta.ghost === "ghost-signal"
    ? "Ghost: tiefer analysieren"
    : "Ghost: normal";

  const sinnTip = last.respo.meta.sinn === "7sinn-ready"
    ? "7SINN: Mehrschichtige Antwort möglich"
    : "7SINN: Basisantwort";

  const optionCalc = {
    complexity: last.respo.tokens.length,
    nextOption: last.respo.tokens.length > 3
      ? "Option: erweitern"
      : "Option: komprimieren"
  };

  return {
    ghostEdit,
    sinnTip,
    optionCalc,
    basedOn: last
  };
}
