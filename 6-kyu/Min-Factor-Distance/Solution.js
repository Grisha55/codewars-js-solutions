function minDistance(n) {
    const res = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res.push(i);
        }
    }

    let minLen = Infinity;
    for (let i = 0; i < res.length; i++) {
        if (res[i + 1] - res[i] < minLen) {
            minLen = res[i + 1] - res[i];
        }
    }

    return minLen;
}
