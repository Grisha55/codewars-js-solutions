const LETTERS = "ABCDEFGHIJKLM";
const SYMBOLS = "~!@#$%^&*";

function rndCode() {
    let code;
    do {
        let c = "";
        c += LETTERS[Math.floor(Math.random() * LETTERS.length)];
        c += LETTERS[Math.floor(Math.random() * LETTERS.length)];
        for (let i = 0; i < 4; i++) {
            c += Math.floor(Math.random() * 10);
        }
        c += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        c += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        code = c;
    } while (rndCode._seen.has(code));
    rndCode._seen.add(code);
    return code;
}
rndCode._seen = new Set();
