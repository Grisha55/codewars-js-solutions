function tailAndHead(arr) {
    const head = (n) => Number(String(n)[0]);
    const tail = (n) => n % 10;
    return arr.slice(0, -1).reduce((product, a, i) => {
        const sum = tail(a) + head(arr[i + 1]);
        return product * sum;
    }, 1);
}
