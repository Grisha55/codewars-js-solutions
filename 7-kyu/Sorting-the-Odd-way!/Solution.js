function sortItOut(array) {
    const odds = [...array]
        .filter((n) => Math.floor(n) % 2 !== 0)
        .sort((a, b) => a - b);
    const evens = [...array]
        .filter((n) => Math.floor(n) % 2 === 0)
        .sort((a, b) => b - a);
    return [...odds, ...evens];
}
