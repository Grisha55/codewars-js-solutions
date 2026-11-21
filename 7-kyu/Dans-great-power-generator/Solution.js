function danspower(num, power) {
    const res = num ** power;
    if (res % 2 === 0) return res;
    return Math.round(res / 10) * 10;
}
