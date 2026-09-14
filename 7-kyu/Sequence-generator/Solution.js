function sequence(n, pattern) {
    const result = new Array(n);

    if (typeof pattern === "function") {
        for (let i = 0; i < n; i++) {
            result[i] = pattern(undefined, i);
        }
    } else {
        for (let i = 0; i < n; i++) {
            result[i] = pattern;
        }
    }

    return result;
}
