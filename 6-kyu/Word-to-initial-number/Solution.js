function convert(s) {
    if (s.length === 0) return 0;
    s = s.toLowerCase();

    const digit = {};
    const order = [];
    for (const c of s) {
        if (!(c in digit)) {
            digit[c] = null;
            order.push(c);
        }
    }

    const seq = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9];
    order.forEach((c, i) => {
        digit[c] = seq[i];
    });

    return Number([...s].map((c) => digit[c]).join(""));
}
