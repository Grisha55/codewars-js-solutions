function palindrome(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
        return "Not valid";
    }

    const str = String(num);
    const n = str.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 2; j <= n; j++) {
            const sub = str.slice(i, j);
            if (sub === sub.split("").reverse().join("")) {
                return true;
            }
        }
    }

    return false;
}
