function add(arr) {
    if (arr.length === 0) return arr[0];
    const res = [];
    let curSum = 0;

    for (let i = 0; i < arr.length; i++) {
        curSum += arr[i];
        res.push(curSum);
    }

    return res;
}
