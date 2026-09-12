export function MXU_dashboard(state) {

    // 3 (Vorderrahmen)
    const ui = "MXU-Dashboard";
    const time = Date.now();
    const stamp = time.toString(36);   // atomare Zeitmarke

    // 9 (sichtbarer Kern)
    const core = {
        state,
        active: Boolean(state),
        updated: time,
        stamp,
        px: state?.px || null,
        axis: state?.axis || null,
        nc: state?.nc || null,
        treue: state?.treue || null,
        content: state?.content || null
    };

    // 3 (Hinterrahmen)
    return {
        ui,
        core,
        time
    };
}
