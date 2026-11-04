function fromNb2Str(n, sys) {
    for (let i = 0; i < sys.length; i++) {
        for (let j = i + 1; j < sys.length; j++) {
            if (gcd(sys[i], sys[j]) !== 1) return "Not applicable";
        }
    }

    const prod = sys.reduce((p, m) => p * m, 1);
    if (prod <= n) return "Not applicable";

    return sys.map((m) => "-" + (n % m)).join("-") + "-";
}

function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return a;
}
