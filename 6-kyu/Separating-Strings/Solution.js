function sepStr(str) {
    const words = str.split(" ");
    const maxLen = Math.max(...words.map((w) => w.length));
    const wordCount = words.length;

    const res = Array.from({ length: maxLen }, () => Array(wordCount).fill(""));

    for (let j = 0; j < wordCount; j++) {
        for (let i = 0; i < words[j].length; i++) {
            res[i][j] = words[j][i];
        }
    }

    return res;
}
