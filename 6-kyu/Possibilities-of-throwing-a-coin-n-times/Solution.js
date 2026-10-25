function coin(n) {
    const total = 1 << n; // 2^n
    const result = new Array(total);

    for (let x = 0; x < total; x++) {
        let str = "";
        for (let j = n - 1; j >= 0; j--) {
            str += (x >> j) & 1 ? "T" : "H";
        }
        result[x] = str;
    }

    return result;
}
