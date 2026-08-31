function primeBefAft(num) {
    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    const res = [];

    for (let i = num - 1; i > 0; i--) {
        if (isPrime(i)) {
            res.push(i);
            break;
        }
    }

    for (let i = num + 1; i < num + 100; i++) {
        if (isPrime(i)) {
            res.push(i);
            break;
        }
    }

    return res;
}
