function ensureEven(n) {
    let res = Math.round(n);
    if (res % 2 === 0) return res;
    while (res % 2 !== 0) {
        if (res > 0) {
            res++;
        } else {
            res--;
        }
    }
    return res;
}
