function sumin(n) {
    // Сумма min(x, y) = сумма по k от 1 до n: k * (2*(n-k) + 1)
    // = n*(n+1)*(2n+1)/6
    return (n * (n + 1) * (2 * n + 1)) / 6;
}

function sumax(n) {
    // Сумма max(x, y) = сумма всех (x+y) - сумма min(x, y)
    // = n^2 * (n + 1) - sumin(n)
    return n * n * (n + 1) - sumin(n);
}

function sumsum(n) {
    // Сумма (x + y) = сумма x + сумма y = n * sum(1..n) * 2
    // = n * n * (n + 1)
    return n * n * (n + 1);
}
