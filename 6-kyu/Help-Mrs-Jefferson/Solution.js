function shortestArrang(n) {
    for (let L = 2; L * L <= 2 * n + L; L++) {
        if ((2 * n) % L !== 0) continue;
        const m = ((2 * n) / L - L + 1) / 2;
        if (Number.isInteger(m) && m >= 1) {
            const result = [];
            for (let x = m + L - 1; x >= m; x--) result.push(x);
            return result;
        }
    }
    return [-1];
}
