function seqToOne(n) {
    const res = [];

    if (n < 1) {
        for (let i = n; i <= 1; i++) {
            res.push(i);
        }
    } else {
        for (let i = n; i > 0; i--) {
            res.push(i);
        }
    }

    return res;
}
