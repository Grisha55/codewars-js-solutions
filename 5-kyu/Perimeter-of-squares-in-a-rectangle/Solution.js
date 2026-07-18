function perimeter(n) {
    if (n === 0) return 4;
    let a = 1;
    let b = 1;
    const arr = [a, b];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return 4 * arr.reduce((acc, num) => acc + num, 0);
}
