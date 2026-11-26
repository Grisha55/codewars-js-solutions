function sumLength(array) {
    let negCount = 0;
    let zeroFound = false;
    let posSum = 0;

    for (const n of array) {
        if (n > 0) {
            posSum += n;
        } else if (n === 0) {
            if (!zeroFound) {
                negCount++;
            }
            zeroFound = !zeroFound;
        } else {
            negCount++;
        }
    }

    return `${posSum} ${negCount}`;
}
