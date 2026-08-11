function pointsNumber(r) {
    let count = 0;
    const r2 = r * r;

    for (let x = -r; x <= r; x++) {
        const maxY = Math.floor(Math.sqrt(r2 - x * x));
        count += 2 * maxY + 1;
    }

    return count;
}
