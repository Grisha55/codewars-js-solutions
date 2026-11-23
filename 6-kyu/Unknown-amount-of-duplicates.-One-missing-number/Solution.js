function findDupsMiss(arr) {
    const count = {};
    const unique = [...new Set(arr)].sort((a, b) => a - b);
    const duplicates = [];

    for (const n of arr) {
        count[n] = (count[n] || 0) + 1;
    }

    for (const key in count) {
        if (count[key] > 1) {
            duplicates.push(+key);
        }
    }
    let num = -1;
    for (let i = 1; i < unique.length; i++) {
        if (unique[i] - unique[i - 1] > 1) {
            num = unique[i] - 1;
        }
    }

    return [num, duplicates];
}
