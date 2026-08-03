function isTwinPrime(n) {
    if (n < 3) return true;
    const isPrime = (num) => {
        for (let i = 2; i <= Math.round(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    return isPrime(n) && isPrime(n - 2) && isPrime(n + 2);
}
