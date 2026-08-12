function daysRepresented(trips) {
    const all = [];

    for (const [f, s] of trips) {
        for (let i = f; i <= s; i++) {
            if (!all.includes(i)) {
                all.push(i);
            }
        }
    }

    return all.length;
}
