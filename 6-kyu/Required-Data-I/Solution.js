function countSel(array) {
    const total = array.length;

    const freq = new Map();
    for (const num of array) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const uniqueCount = freq.size;

    let singleCount = 0;
    for (const count of freq.values()) {
        if (count === 1) singleCount++;
    }

    let maxFreq = 0;
    for (const count of freq.values()) {
        if (count > maxFreq) maxFreq = count;
    }

    const maxElements = [];
    for (const [num, count] of freq) {
        if (count === maxFreq) maxElements.push(num);
    }
    maxElements.sort((a, b) => a - b);

    return [total, uniqueCount, singleCount, [maxElements, maxFreq]];
}
