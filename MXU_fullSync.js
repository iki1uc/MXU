export function MXU_fullSync(packet) {
    return {
        sync: true,
        time: Date.now(),
        packet
    };
}

