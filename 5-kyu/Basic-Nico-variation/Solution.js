function nico(key, message) {
    const k = key.length;
    const sorted = key.split("").sort().join("");
    const code = key.split("").map((ch) => sorted.indexOf(ch) + 1);

    let result = "";

    for (let i = 0; i < message.length; i += k) {
        const s = message.slice(i, i + k);
        const res = Array(k).fill(" ");

        for (let j = 0; j < s.length; j++) {
            res[code[j] - 1] = s[j];
        }

        result += res.join("");
    }

    return result;
}
