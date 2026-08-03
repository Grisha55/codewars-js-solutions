function closest(arr) {
    if (arr.includes(0)) return 0;

    let closest = null;
    let minDistance = Infinity;

    for (const num of arr) {
        const distance = Math.abs(num);

        if (distance < minDistance) {
            minDistance = distance;
            closest = num;
        } else if (distance === minDistance) {
            if (num === -closest) {
                return null;
            }
        }
    }

    return closest;
}
