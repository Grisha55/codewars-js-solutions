function factors(x) {
    if (typeof x !== "number" || x < 1 || x.toString().includes(".")) return -1;
    const res = [];
    for (let i = x; i > 0; i--) {
        if (x % i === 0) {
            res.push(i);
        }
    }

    return res;
}
