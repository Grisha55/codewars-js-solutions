function checkchoose(m, n) {
    if (m === 1 && n >= 1) return n;
    if (m === 0) return 0;

    let result = 1;

    for (let x = 1; x <= n / 2; x++) {
        result = (result * (n - x + 1)) / x;

        if (result === m) {
            return x;
        }
        if (result > m) {
            break;
        }
    }

    return -1;
}
