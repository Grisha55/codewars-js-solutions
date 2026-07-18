function greatestProduct(input) {
    let max = 0;
    const arr = [];

    for (let i = 0; i < input.length - 4; i++) {
        const cur = input
            .slice(i, i + 5)
            .split("")
            .reduce((acc, n) => acc * n, 1);
        max = Math.max(max, cur);
    }

    return max;
}
