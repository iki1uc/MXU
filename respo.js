export function process(txt) {
  return {
    received: txt,
    status: "RESPO OK",
    time: Date.now()
  };
}

