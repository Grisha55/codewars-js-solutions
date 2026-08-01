function orArrays(arr1, arr2, defaultValue = 0) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        const a = i < arr1.length ? arr1[i] : defaultValue;
        const b = i < arr2.length ? arr2[i] : defaultValue;
        result.push(a | b);
    }

    return result;
}
