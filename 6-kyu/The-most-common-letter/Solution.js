function replaceCommon(string, letter) {
    const count = {};

    for (const c of string) {
        if (c !== " ") {
            count[c] = (count[c] || 0) + 1;
        }
    }

    let maxCount = 0;
    for (const key in count) {
        if (count[key] > maxCount) {
            maxCount = count[key];
        }
    }

    let mostCommon = null;
    for (const c of string) {
        if (c !== " " && count[c] === maxCount) {
            mostCommon = c;
            break;
        }
    }

    return string.split(mostCommon).join(letter);
}
