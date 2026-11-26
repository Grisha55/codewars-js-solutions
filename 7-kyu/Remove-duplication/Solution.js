function removeDuplication(arr) {
    const count = {};
    const res = [];

    for (const num of arr) {
        if (!isNaN(num)) {
            count[num] = (count[num] || 0) + 1;
        }
    }

    for (const key in count) {
        if (count[key] === 1) {
            res.push(+key);
        }
    }

    return res;
}
