function createBox(m, n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            const top = i;
            const bottom = n - 1 - i;
            const left = j;
            const right = m - 1 - j;
            row.push(Math.min(top, bottom, left, right) + 1);
        }
        result.push(row);
    }

    return result;
}
