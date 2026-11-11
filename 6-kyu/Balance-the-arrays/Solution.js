function balance(arr1, arr2) {
    const count1 = {};
    const count2 = {};

    for (const el of arr1) {
        count1[el] = (count1[el] || 0) + 1;
    }

    for (const el of arr2) {
        count2[el] = (count2[el] || 0) + 1;
    }

    for (const key in count1) {
        for (const key2 in count2) {
            if (count2[key2] === count1[key]) {
                count2[key2] = 0;
                count1[key] = 0;
            }
        }
    }

    for (const key in count1) {
        if (count1[key] !== 0) return false;
    }

    for (const key in count2) {
        if (count2[key] !== 0) return false;
    }

    return true;
}
