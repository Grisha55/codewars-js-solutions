function getCount(words) {
    const res = { vowels: 0, consonants: 0 };
    const vowels = "aeiou";
    if (typeof words !== "string") return { vowels: 0, consonants: 0 };
    const lWords = words.toLowerCase();

    for (const c of lWords) {
        if (vowels.includes(c)) {
            res.vowels++;
        } else if (c >= "a" && c <= "z") {
            res.consonants++;
        }
    }

    return res;
}
