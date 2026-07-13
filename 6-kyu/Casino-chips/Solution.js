function solve(arr) {
    const [white, green, black] = arr;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const max = Math.max(white, green, black);

    return Math.min(Math.floor(sum / 2), sum - max);
}
