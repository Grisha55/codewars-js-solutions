function connotation(str) {
    const words = str.split(/\s+/).filter((w) => w.length > 0);
    let positive = 0;
    let negative = 0;

    for (const word of words) {
        const first = word[0].toLowerCase();
        if (first >= "a" && first <= "m") {
            positive++;
        } else if (first >= "n" && first <= "z") {
            negative++;
        }
    }

    return positive >= negative;
}
