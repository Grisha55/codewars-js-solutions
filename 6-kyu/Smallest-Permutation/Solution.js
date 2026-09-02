function minPermutation(n) {
    if (n === 0) return 0;

    const isNegative = n < 0;
    const digits = String(Math.abs(n)).split("").map(Number);

    digits.sort((a, b) => a - b);

    if (digits[0] === 0) {
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] !== 0) {
                [digits[0], digits[i]] = [digits[i], digits[0]];
                break;
            }
        }
    }

    const result = parseInt(digits.join(""), 10);
    return isNegative ? -result : result;
}
