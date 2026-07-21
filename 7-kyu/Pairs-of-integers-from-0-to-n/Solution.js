function generatePairs(n) {
    const res = [];

    for (let i = 0; i < n; i++) {
        for (let j = i; j <= n; j++) {
            res.push([i, j]);
        }
    }

    res.push([n, n]);

    return res;
}
