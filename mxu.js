import { processTXT } from "./respo.js";
import { evoImprove } from "./nc.evo.js";

let evoHistory = [];

export function fromPX(txt) {
  const respoOut = processTXT(txt);

  const evoItem = {
    in: txt,
    respo: respoOut,
    time: Date.now()
  };

  evoHistory.push(evoItem);

  const evoOut = evoImprove(evoHistory);

  return {
    status: "OK",
    last: evoItem,
    evo: evoOut,
    evoCount: evoHistory.length
  };
}

export function channel(id) {
  const el = document.getElementById(id);
  el.innerHTML = "MXU CHANNEL ACTIVE";
}
