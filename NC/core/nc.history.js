// NC → HISTORY (leicht, frei, evolvierend)

export const NC_HISTORY = {

    log: [],

    add(entry = {}) {
        const item = {
            timestamp: Date.now(),
            id: entry.id || "NC",
            type: entry.type || "unknown",
            symbol: entry.symbol || null,
            evo: entry.evo || null,
            info: entry.info || null,
            ...entry
        };

        this.log.push(item);
        return item;
    },

    last() {
        return this.log.length > 0 ? this.log[this.log.length - 1] : null;
    },

    all() {
        return this.log;
    }
};

