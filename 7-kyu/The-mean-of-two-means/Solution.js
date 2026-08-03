function getMean(arr, x, y) {
    if (x < 2 || y < 2 || x > arr.length - 1 || y > arr.length - 1) return -1;

    const a = arr.slice(0, x).reduce((a, n) => a + n, 0) / x;
    const b = arr.slice(arr.length - y).reduce((a, n) => a + n, 0) / y;

    return (a + b) / 2;
}
