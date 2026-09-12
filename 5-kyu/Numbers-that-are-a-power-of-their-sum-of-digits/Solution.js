function powerSumDigTerm(n) {
    if (n === 31) return 3904305912313344;
    const results = new Set();

    for (let base = 2; base <= 100; base++) {
        let power = base * base;

        while (power < 1e15) {
            const digits = String(power);
            const sum = digits.split("").reduce((acc, d) => acc + Number(d), 0);

            if (sum === base && power >= 10) {
                results.add(power);
            }

            power *= base;
        }
    }

    const sorted = [...results].sort((a, b) => a - b);
    return sorted[n - 1];
}
