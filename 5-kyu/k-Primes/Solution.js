function primeOmega(n) {
    if (n < 2) return 0;
    let count = 0;
    let temp = n;

    for (let p = 2; p * p <= temp; p++) {
        while (temp % p === 0) {
            count++;
            temp /= p;
        }
    }
    if (temp > 1) count++;
    return count;
}

function countKprimes(k, start, end) {
    if (k <= 0 || start > end) return [];
    const result = [];
    for (let num = start; num <= end; num++) {
        if (primeOmega(num) === k) {
            result.push(num);
        }
    }
    return result;
}

function puzzle(s) {
    const primes = [];
    const triples = [];
    const sevens = new Set();

    for (let i = 2; i < s; i++) {
        const omega = primeOmega(i);
        if (omega === 1) primes.push(i);
        else if (omega === 3) triples.push(i);
        else if (omega === 7) sevens.add(i);
    }

    let count = 0;

    for (const a of primes) {
        for (const b of triples) {
            const c = s - a - b;
            if (c > 0 && sevens.has(c)) {
                count++;
            }
        }
    }
    return count;
}
