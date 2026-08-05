function encode(plaintext) {
    const alph = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    const txt = plaintext.toLowerCase();

    for (let i = 0; i < txt.length; i++) {
        if (alph.includes(txt[i])) {
            const idx = alph.indexOf(txt[i]);
            res += idx % 2 === 0 ? "0" : "1";
        } else {
            res += txt[i];
        }
    }

    return res;
}
