function GeometricSequenceSum(a, r, n) {
    let res = [a];

    for (let i = 1; i < n; i++) {
        res.push(res[i - 1] * r);
    }

    return res.reduce((acc, n) => acc + n, 0);
}
