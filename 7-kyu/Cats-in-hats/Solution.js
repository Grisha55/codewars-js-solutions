function height(n) {
    let res = 2000000;
    let cur = res;

    for (let i = 0; i < n; i++) {
        cur = cur / 2.5;
        res += cur;
    }

    return res.toFixed(3);
}
