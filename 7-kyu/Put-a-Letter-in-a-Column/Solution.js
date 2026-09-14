function buildRowText(index, character) {
    const max = 8;
    const res = [];

    for (let i = 0; i <= max; i++) {
        if (index === i) {
            res.push(character);
        } else {
            res.push(" ");
        }
    }

    return "|" + res.join("|") + "|";
}
