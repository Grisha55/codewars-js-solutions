function kaCokadekaMe(word) {
    const vowels = "aeiou";
    let res = "ka";

    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        let next = "";
        if (i + 1 < word.length) {
            next = word[i + 1].toLowerCase() ?? "";
        }
        if (
            vowels.includes(letter) &&
            !vowels.includes(next) &&
            i < word.length - 1
        ) {
            res += word[i] + "ka";
        } else {
            res += word[i];
        }
    }

    return res;
}
