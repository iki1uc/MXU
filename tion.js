NC.TION = {
  mark(level = 1) {
    return TION(level);
  },

  sensor(level = 1) {
    const t = TION(level);
    return {
      ok: true,
      mana: t.mana,
      aura: t.aura,
      zen: t.zen,
      cycle: t.cycle
    };
  },

  report(level = 1) {
    const t = TION(level);
    return {
      module: "TION",
      level,
      ...t
    };
  }
};
