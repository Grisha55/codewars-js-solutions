function decrypt(encryption) {
    const arr = new Array(26).fill(0);
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (const c of encryption) {
        if (letters.includes(c)) {
            const idx = letters.indexOf(c);
            arr[idx]++;
        }
    }

    return arr.join("");
}
