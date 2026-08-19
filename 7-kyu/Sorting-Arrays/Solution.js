function sortArray(a1, a2) {
    const res = [];

    for (const w of a1) {
        for (const c of a2) {
            if (w[0] === c[0]) {
                res.push(c);
            }
        }
    }
    return res;
}
