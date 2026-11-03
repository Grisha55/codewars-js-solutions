function majority(arr) {
    if (arr.length === 0) return null;

    const count = {};
    for (const c of arr) {
        count[c] = (count[c] || 0) + 1;
    }

    let max;
    let maxVal = 0;
    for (const key in count) {
        if (maxVal < count[key]) {
            max = key;
            maxVal = count[key];
        }
    }

    for (const key in count) {
        if (maxVal === count[key] && key !== max) return null;
    }

    return max;
}
