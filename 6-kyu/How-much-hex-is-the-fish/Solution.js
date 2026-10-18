function fisHex(name) {
    const valid = "abcdef";
    let result = 0;

    for (const c of name.toLowerCase()) {
        if (valid.includes(c)) {
            result ^= parseInt(c, 16);
        }
    }

    return result;
}
