function countOddPentaFib(n) {
    if (n < 1) return 0;
    if (n === 1) return 1;

    const fullBlocks = Math.floor((n + 1) / 6);
    const remainder = (n + 1) % 6;

    let result = fullBlocks * 2;

    if (remainder > 1) result++;
    if (remainder > 2) result++;

    return result - 1;
}
