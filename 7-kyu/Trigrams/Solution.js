function trigrams(phrase) {
    if (phrase.length < 3) return "";

    const str = phrase.replace(/ /g, "_");
    const res = [];

    for (let i = 0; i <= str.length - 3; i++) {
        res.push(str.slice(i, i + 3));
    }

    return res.join(" ");
}
