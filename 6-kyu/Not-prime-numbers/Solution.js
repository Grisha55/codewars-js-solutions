function notPrimes(a, b) {
    const result = [];

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    function hasOnlyPrimeDigits(n) {
        const digits = String(n);
        for (const d of digits) {
            if (!["2", "3", "5", "7"].includes(d)) return false;
        }
        return true;
    }

    for (let num = a; num < b; num++) {
        if (hasOnlyPrimeDigits(num) && !isPrime(num)) {
            result.push(num);
        }
    }

    return result;
}
