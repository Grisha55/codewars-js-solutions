function fraction(a, b) {
    let x = a,
        y = b;
    while (y) {
        const t = x % y;
        x = y;
        y = t;
    }

    return a / x + b / x;
}
