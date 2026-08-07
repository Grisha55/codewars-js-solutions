function magicSum(numbers) {
    return [...numbers]
        .filter((n) => n % 2 !== 0 && String(n).includes("3"))
        .reduce((acc, n) => acc + n, 0);
}
