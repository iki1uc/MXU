// MXU_TREUE.js
// Systemtreue-Kern für MXU
// Jede Meldung wird geprüft, bewertet und als gültig markiert,
// wenn sie systemtreu, stabil und konfliktfrei ist.

const MXU_TREUE = (() => {

  // interner Speicher für Treue-Meldungen
  const log = [];

  // Systemtreue-Score
  let score = 0;

  // gültige Quellen (Module)
  const SOURCES = [
    "AX", "MX", "NC", "UX", "XA",
    "TXT", "ROOM", "ECO", "ATOM",
    "DOM", "EVO", "EOS", "MARKT",
    "BOERSE", "SELF", "PX"
  ];

  // gültige Treue-Handlungen
  const ACTIONS = [
    "meldet", "bestätigt", "ordnet",
    "stabilisiert", "harmonisiert",
    "verbindet", "klärt", "führt",
    "sichert", "bewahrt"
  ];

  // Meldung prüfen
  function checkMessage(msg) {
    if (!msg || typeof msg !== "object") return false;
    if (!msg.source || !msg.action) return false;

    const srcOK = SOURCES.includes(msg.source);
    const actOK = ACTIONS.includes(msg.action);

    return srcOK && actOK;
  }

  // Meldung als gültig markieren
  function accept(msg) {
    const valid = checkMessage(msg);

    const entry = {
      time: Date.now(),
      source: msg.source,
      action: msg.action,
      payload: msg.payload || null,
      valid
    };

    log.push(entry);

    if (valid) score += 1;

    return entry;
  }

  // Systemtreue abrufen
  function getTreue() {
    return {
      score,
      entries: log.slice(-20), // letzte 20 Meldungen
      status: score > 0 ? "systemtreu" : "neutral"
    };
  }

  // Reset (friedlich)
  function reset() {
    log.length = 0;
    score = 0;
  }

  return {
    accept,
    getTreue,
    reset
  };

})();

export default MXU_TREUE;
