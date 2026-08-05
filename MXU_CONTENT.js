// MXU_CONTENT.js
// Füllt ECO‑Module mit Systemtreue + PX + NC + AX Daten

export const MXU_CONTENT = (() => {

    const templates = {
        ATOM:  (t) => `<h1>ATOM</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        DOM:   (t) => `<h1>DOM</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        EVO:   (t) => `<h1>EVO</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        EOS:   (t) => `<h1>EOS</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        MARKT: (t) => `<h1>MARKT</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        BOERSE:(t) => `<h1>BOERSE</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        FUNK:  (t) => `<h1>FUNKTION</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        RESPO: (t) => `<h1>RESPO</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        PYRA:  (t) => `<h1>PYRAMIDE</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        SELF:  (t) => `<h1>SELF</h1><pre>${JSON.stringify(t, null, 2)}</pre>`,
        TOOL:  (t) => `<h1>TOOLOMATTER</h1><pre>${JSON.stringify(t, null, 2)}</pre>`
    };

    function render(name, treue) {
        const tpl = templates[name];
        if (!tpl) return `<h1>${name}</h1><p>Kein Template</p>`;
        return tpl(treue);
    }

    return { render };

})();
