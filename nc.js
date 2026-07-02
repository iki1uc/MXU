export function ncImprove(history) {
  // Beispiel: einfache Verbesserung
  const last = history[history.length - 1];
  return {
    suggestion: "next-level",
    basedOn: last
  };
}

