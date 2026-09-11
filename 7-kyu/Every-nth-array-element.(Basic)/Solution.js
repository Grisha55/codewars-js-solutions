function every(arr, interval = 1, startIndex = 0) {
    const result = [];
    for (let i = startIndex; i < arr.length; i += interval) {
        result.push(arr[i]);
    }
    return result;
}
