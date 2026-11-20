function reverse_and_combine_text(str) {
    let words = str.split(" ");
    if (words.length <= 1) return str;

    const reverse = (s) => [...s].reverse().join("");

    while (words.length > 1) {
        const reversed = words.map(reverse);

        const next = [];
        for (let i = 0; i < reversed.length; i += 2) {
            if (i + 1 < reversed.length) {
                next.push(reversed[i] + reversed[i + 1]);
            } else {
                next.push(reversed[i]);
            }
        }

        words = next;
    }

    return words[0];
}
