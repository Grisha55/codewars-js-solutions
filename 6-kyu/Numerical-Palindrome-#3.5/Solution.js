function palindrome(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
        return "Not valid";
    }

    const str = String(num);
    const found = new Set();

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 2; j <= str.length; j++) {
            const sub = str.slice(i, j);
            if (sub[0] === "0" || sub[sub.length - 1] === "0") continue;
            if (sub === [...sub].reverse().join("")) {
                found.add(Number(sub));
            }
        }
    }

    if (found.size === 0) return "No palindromes found";

    return [...found].sort((a, b) => a - b);
}
