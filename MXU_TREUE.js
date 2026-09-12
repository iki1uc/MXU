function getStatus(px, meta, axis, nc, opts = {}) {

    // Basis‑Zustände
    if (!px) return "ready";
    if (!meta) return "logikal";
    if (!axis) return ")3(())9(";
    if (!nc) return "mind";

    // Optionen (PX‑9‑Modus)
    const { pc, inOpt, outOpt, bund, verbund } = opts;

    if (pc?.atom)      return "()sli.readdy() MODE1+mode0";
    if (px?.atom)      return "MODE2";
    if (inOpt?.atom)   return "MODE3";
    if (outOpt?.atom)  return "MODE3";
    if (bund?.atom)    return "MODE4";
    if (verbund?.atom) return "MODE5";

    return "TRue";
}
