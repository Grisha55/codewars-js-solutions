function process2Arrays(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    let both = 0;
    for (const item of set1) {
        if (set2.has(item)) both++;
    }

    const onlyOne = set1.size - both + (set2.size - both);
    const remaining1 = set1.size - both;
    const remaining2 = set2.size - both;

    return [both, onlyOne, remaining1, remaining2];
}
