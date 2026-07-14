function sumDifferencesBetweenProductsAndLCMs(pairs) {
    let totalSaving = 0;

    for (let i = 0; i < pairs.length; i++) {
        const [a, b] = pairs[i];

        if (a === 0 || b === 0) continue;

        const product = a * b;
        const lcm = leastCommonMultiple(a, b);

        totalSaving += product - lcm;
    }

    return totalSaving;
}

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function leastCommonMultiple(a, b) {
    if (a === 0 || b === 0) return 0;
    return (a * b) / gcd(a, b);
}
