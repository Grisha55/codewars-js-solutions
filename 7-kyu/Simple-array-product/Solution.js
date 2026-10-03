function solve(arr) {
    let maxProd = 1;
    let minProd = 1;

    for (const sub of arr) {
        let newMax = -Infinity;
        let newMin = Infinity;

        for (const num of sub) {
            const candidates = [maxProd * num, minProd * num];
            newMax = Math.max(newMax, ...candidates);
            newMin = Math.min(newMin, ...candidates);
        }

        maxProd = newMax;
        minProd = newMin;
    }

    return maxProd;
}
