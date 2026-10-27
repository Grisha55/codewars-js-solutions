function bitMarch(n) {
    const result = [];
    for (let v = (1 << n) - 1; v < 256; v <<= 1) {
        result.push([...Array(8)].map((_, i) => (v >> (7 - i)) & 1));
    }
    return result;
}
