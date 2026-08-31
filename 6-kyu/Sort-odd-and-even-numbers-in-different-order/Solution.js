function sortArray(array) {
    if (array.length === 0) return [];

    const odds = [...array].filter((n) => n % 2 !== 0).sort((a, b) => a - b);
    const evens = [...array].filter((n) => n % 2 === 0).sort((a, b) => b - a);
    const res = [];

    let oddIdx = 0;
    let evenIdx = 0;
    for (const n of array) {
        if (n % 2 === 0) {
            res.push(evens[evenIdx]);
            evenIdx++;
        } else {
            res.push(odds[oddIdx]);
            oddIdx++;
        }
    }

    return res;
}
