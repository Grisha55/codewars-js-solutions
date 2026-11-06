function solve(str, k) {
    const n = str.length;
    let best = -1;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i + (n - 1 - j) >= k) {
                const num = Number(str.slice(i, j + 1));
                if (num > best) best = num;
            }
        }
    }

    return best;
}
