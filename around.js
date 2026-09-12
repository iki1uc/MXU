NC.AROUND = function(px = {}) {
  const atom = px.atom || null;

  return {
    ATOM: atom,
    cycle: OR81(px.matrix || (atom ? atom.cycle : [])),
    seq: px.seq || [],
    mode: atom ? "mode6" : "pure",
    ok: true
  };
};
