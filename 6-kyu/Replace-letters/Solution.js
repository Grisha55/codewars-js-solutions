function replaceLetters(word) {
    const vowels = new Set("aeiou");
    const isVowel = (c) => vowels.has(c);

    const shift = (c, dir) => {
        let i = alphabet.indexOf(c);
        for (let k = 1; k <= 26; k++) {
            const next = alphabet[(i + dir * k + 676) % 26];
            if (dir === -1 ? !isVowel(next) : isVowel(next)) return next;
        }
        return c;
    };

    return [...word].map((c) => shift(c, isVowel(c) ? -1 : 1)).join("");
}
