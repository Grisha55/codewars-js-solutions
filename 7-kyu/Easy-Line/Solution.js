function easyLine(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Math.log(n + i) - Math.log(i);
    }
    return Math.round(sum);
}
