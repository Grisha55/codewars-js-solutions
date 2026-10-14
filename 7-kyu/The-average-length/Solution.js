function averageLength(array) {
    let avgLength = 0;
    for (const s of array) {
        avgLength += s.length;
    }
    avgLength = Math.round(avgLength / array.length);

    return array.map((s) => {
        if (s.length === avgLength) {
            return s;
        } else if (s.length > avgLength) {
            return s.slice(0, avgLength);
        } else {
            return s[0].repeat(avgLength);
        }
    });
}
