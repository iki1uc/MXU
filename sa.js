// NC-Hooks für SEN
NC.SEN = {
  mark(level = 1) {
    return SEN(level);
  },

  sensor(level = 1) {
    const s = SEN(level);
    return {
      ok: true,
      mana: s.mana,
      aura: s.aura,
      zen: s.zen,
      cycle: s.cycle
    };
  },

  report(level = 1) {
    const s = SEN(level);
    return {
      module: "SEN",
      level,
      ...s
    };
  }
};
