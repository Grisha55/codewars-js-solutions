function fish(shoal) {
    if (shoal.length === 0) return 1;
    const sorted = shoal
        .split("")
        .map(Number)
        .sort((a, b) => a - b);

    let lvl = 1;
    let progress = 0;
    let need = 4 * lvl;

    for (const food of sorted) {
        if (food > lvl) break;
        if (food === 0) continue;
        progress += food;
        while (progress >= need) {
            progress -= need;
            lvl++;
            need = 4 * lvl;
        }
    }

    return lvl;
}
