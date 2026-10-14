function sortIt(arr) {
    const freq = {};
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    return arr.slice().sort((a, b) => {
        if (freq[a] !== freq[b]) return freq[a] - freq[b];
        return b - a;
    });
}
