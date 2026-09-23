function sortStringsByVowels(strings) {
    function longestVowelLength(str) {
        const matches = str.match(/[aeiouAEIOU]+/g);
        if (!matches) return 0;
        return Math.max(...matches.map((m) => m.length));
    }

    return strings
        .map((str, index) => ({ str, index, len: longestVowelLength(str) }))
        .sort((a, b) => b.len - a.len || a.index - b.index)
        .map((item) => item.str);
}
