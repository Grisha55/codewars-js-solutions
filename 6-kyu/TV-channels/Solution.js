function redarr(arr) {
    const uniqueSorted = [...new Set(arr)].sort();
    const result = {};
    uniqueSorted.forEach((channel, index) => {
        result[index] = channel;
    });
    return result;
}
