function maxAndMin(arr1, arr2) {
    let curMax = 0;
    let curMin = Math.abs(arr1[0] - arr2[0]);

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            curMax = Math.max(Math.abs(arr1[i] - arr2[j]), curMax);
            curMin = Math.min(Math.abs(arr1[i] - arr2[j]), curMin);
        }
    }

    return [curMax, curMin];
}
