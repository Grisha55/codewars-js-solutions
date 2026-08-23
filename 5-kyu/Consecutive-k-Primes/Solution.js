function consecKprimes(k, arr) {
    function countPrimeFactors(n) {
        let count = 0;
        let num = n;
        while (num % 2 === 0) {
            count++;
            num /= 2;
        }
        for (let i = 3; i * i <= num; i += 2) {
            while (num % i === 0) {
                count++;
                num /= i;
            }
        }
        if (num > 1) count++;
        return count;
    }

    let result = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (
            countPrimeFactors(arr[i]) === k &&
            countPrimeFactors(arr[i + 1]) === k
        ) {
            result++;
        }
    }
    return result;
}
