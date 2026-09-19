function SumSquares(l) {
    let res = 0;
    for (const el of l) {
        if (Array.isArray(el)) {
            res += SumSquares(el);
        } else {
            res += el * el;
        }
    }
    return res;
}
