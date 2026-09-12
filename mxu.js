// OR‑Module
export function OR3(a, mid, b) {
  return { in: a, mid, out: b, mode: "or3" };
}

export function OR9(list) {
  return { points: list, mode: "or9" };
}

export function OR81(matrix) {
  return { cycle: matrix, mode: "or81" };
}

// ATOM aus fromPX() wird überall eingebaut
// — SENSOR
NC.SENSOR = function(px = {}) {
  return {
    ATOM: px.atom || null,
    entropy: px.atom?.entropy || 0,
    spin: px.atom?.spin || 0,
    charge: px.atom?.charge || 0,
    symmetry: px.atom?.symmetry || 0,
    coherence: px.atom?.coherence || false,
    ok: true
  };
};

// — WORK
NC.WORK = function(px = {}) {
  return {
    ATOM: px.atom || null,
    OR3: OR3(px.a, px.mid, px.b),
    OR9: OR9(px.list || []),
    OR81: OR81(px.matrix || []),
    ok: true
  };
};

// — AROUND
NC.AROUND = function(px = {}) {
  return {
    ATOM: px.atom || null,
    cycle: OR81(px.matrix || []),
    seq: px.seq || [],
    ok: true
  };
};

// — ATOM mit OR81 gekoppelt (Meta‑Kopplung)
NC.COUPLE = function(px = {}) {
  return {
    ATOM: px.atom || null,
    OR81: OR81(px.atom ? px.atom.cycle : []),
    ok: true
  };
};
// MXU Beam ↔ ATOM Kopplung
export function BEAM(id, px = {}) {
  const el = document.getElementById(id);
  if (!el) return { ok:false, msg:"beam not found" };

  return {
    id,
    gate: el.dataset.gate || null,
    beam: el.dataset.beam || null,
    ATOM: px.atom || null,
    cycle: px.atom ? px.atom.cycle : 81,
    ok: true
  };
}

// MXU channel → nutzt BEAM
export function channel(id, px = {}) {
  const beam = BEAM(id, px);

  return {
    channel: id,
    gate: beam.gate,
    beam: beam.beam,
    ATOM: beam.ATOM,
    cycle: beam.cycle,
    ok: true
  };
}
