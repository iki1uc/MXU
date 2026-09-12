export const MXU_infiniteCache = {
  AIR:  {},   // Always‑Instant‑Response
  AIV:  {},   // Always‑Instant‑Vector
  XYX:  {},   // Cross‑Yield‑Xchange

  set(key, value) {
    this.AIR[key] = value;
    this.AIV[key] = value;
    this.XYX[key] = value;
  },

  get(key) {
    return this.AIR[key] || this.AIV[key] || this.XYX[key] || null;
  }
};
