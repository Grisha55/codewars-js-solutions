function sort(initialArray, sortingArray) {
    const res = new Array(initialArray.length).fill(0);

    for (let i = 0; i < initialArray.length; i++) {
        res[sortingArray[i]] = initialArray[i];
    }

    return res;
}
