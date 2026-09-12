// MXU Beam ↔ ATOM Kopplung
export function BEAM(id, px = {}) {
  const el = document.getElementById(id);
  if (!el) return { ok:false, msg:"beam not found" };

  const atom = px.atom || null;

  return {
    id,
    gate: el.dataset.gate || null,
    beam: el.dataset.beam || null,
    ATOM: atom,
    cycle: atom ? atom.cycle : 81,
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
