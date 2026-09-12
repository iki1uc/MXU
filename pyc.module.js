function PYC(px4) {
  return {
    msg: "PYC",
    atomar: px4.atomar,
    con: px4.con,
    impulse: px4.N.impulse + px4.E.impulse + px4.S.impulse + px4.W.impulse,
    axis: {
      north: px4.N.atom,
      east:  px4.E.atom,
      south: px4.S.atom,
      west:  px4.W.atom
    }
  };
}
