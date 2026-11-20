function solve(n) {
    const digitSum = (num) => {
        let s = 0;
        while (num > 0) {
            s += num % 10;
            num = Math.floor(num / 10);
        }
        return s;
    };

    let best = digitSum(n);

    let pow = 10;
    while (pow <= n * 10) {
        const b = pow - 1;
        if (b <= n) {
            const a = n - b;
            best = Math.max(best, digitSum(a) + digitSum(b));
        }
        pow *= 10;
    }

    return best;
}
