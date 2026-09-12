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

// NC‑Namespace
export const NC = {};

// NC.SENSOR — ATOM eingebaut
NC.SENSOR = function(px = {}) {
  const atom = px.atom || null;

  return {
    ATOM: atom,
    entropy: atom?.entropy || 0,
    spin: atom?.spin || 0,
    charge: atom?.charge || 0,
    symmetry: atom?.symmetry || 0,
    coherence: atom?.coherence || false,
    ok: true
  };
};

// NC.WORK — ATOM + OR‑Module
NC.WORK = function(px = {}) {
  return {
    ATOM: px.atom || null,
    OR3: OR3(px.a, px.mid, px.b),
    OR9: OR9(px.list || []),
    OR81: OR81(px.matrix || []),
    ok: true
  };
};

// NC.AROUND — ATOM + OR81‑Cycle
NC.AROUND = function(px = {}) {
  return {
    ATOM: px.atom || null,
    cycle: OR81(px.matrix || []),
    seq: px.seq || [],
    ok: true
  };
};

// NC.COUPLE — ATOM ↔ OR81 Kopplung
NC.COUPLE = function(px = {}) {
  const atom = px.atom || null;

  return {
    ATOM: atom,
    OR81: OR81(atom ? atom.cycle : []),
    ok: true
  };
};
