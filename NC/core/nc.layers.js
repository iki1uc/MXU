// NC → LAYERS (leicht, frei, strukturiert)

export const NC_LAYERS = {

    // Vollkreis-Schichten
    map: {
        origin: 0,   // ◉
        start: 1,    // 3
        end: 2,      // 9
        core: 3,     // ◎
        root: 0,     // ◆
        layer: 1,    // △
        height: 2,   // 27
        space: 3,    // ▣
        repeat: 0    // ↺
    },

    // Layer abrufen
    get(name) {
        return this.map[name] ?? null;
    },

    // Layer setzen (frei erweiterbar)
    set(name, value) {
        this.map[name] = value;
        return this.map[name];
    },

    // Alle Layer zurückgeben
    all() {
        return this.map;
    }
};

