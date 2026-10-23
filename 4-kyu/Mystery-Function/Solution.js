function mystery(n) {
    return n ^ (n >> 1);
}

function mysteryInv(g) {
    let n = 0;
    while (g > 0) {
        n ^= g;
        g >>= 1;
    }
    return n;
}

function nameOfMystery() {
    return "Gray code";
}
