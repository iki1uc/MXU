import { processTXT } from "./respo.js";
import { callAPI } from "./api.js";

let evoHistory = [];

export async function fromPX(txt) {
  const respoOut = processTXT(txt);
  const apiOut = await callAPI(respoOut);

  const evoItem = {
    in: txt,
    respo: respoOut,
    api: apiOut,
    time: Date.now()
  };

  evoHistory.push(evoItem);

  return {
    status: "OK",
    last: evoItem,
    evoCount: evoHistory.length
  };
}
