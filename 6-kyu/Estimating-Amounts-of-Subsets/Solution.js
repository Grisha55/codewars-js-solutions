function estSubsets(arr) {
    const uniques = new Set(arr).size;
    return Math.pow(2, uniques) - 1;
}
