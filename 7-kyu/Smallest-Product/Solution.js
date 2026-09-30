function smallestProduct(arr) {
    let smallest = Infinity;

    for (const a of arr) {
        const mult = a.reduce((acc, n) => acc * n, 1);
        if (mult < smallest) {
            smallest = mult;
        }
    }

    return smallest;
}
