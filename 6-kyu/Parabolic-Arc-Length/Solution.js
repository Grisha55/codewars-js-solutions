function lenCurve(n) {
    const h = 1 / n;
    let len = 0;

    for (let i = 0; i < n; i++) {
        const x1 = i * h;
        const y1 = x1 * x1;
        const x2 = (i + 1) * h;
        const y2 = x2 * x2;

        const dx = x2 - x1;
        const dy = y2 - y1;
        len += Math.sqrt(dx * dx + dy * dy);
    }

    return len;
}
