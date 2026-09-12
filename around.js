NC.AROUND = function(px = {}) {
  return {
    cycle: OR81(px.matrix || []),
    seq: px.seq || [],
    ok: true
  };
};
