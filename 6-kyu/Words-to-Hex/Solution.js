function wordsToHex(str) {
    const words = str.split(/\s+/).filter((w) => w.length > 0);

    return words.map((word) => {
        let hex = "#";
        for (let i = 0; i < 3; i++) {
            if (i < word.length) {
                hex += word.charCodeAt(i).toString(16).padStart(2, "0");
            } else {
                hex += "00";
            }
        }
        return hex;
    });
}
