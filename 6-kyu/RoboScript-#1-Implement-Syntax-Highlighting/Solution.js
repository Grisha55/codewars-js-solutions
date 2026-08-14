function highlight(code) {
    const colorMap = {
        F: "pink",
        L: "red",
        R: "green",
    };
    let result = "";
    let i = 0;
    while (i < code.length) {
        const ch = code[i];
        let color = null;
        if (ch === "F" || ch === "L" || ch === "R") {
            color = colorMap[ch];
        } else if (ch >= "0" && ch <= "9") {
            color = "orange";
        }

        if (color) {
            let j = i;
            while (j < code.length) {
                const c = code[j];
                let same = false;
                if (c === "F" || c === "L" || c === "R") {
                    if (colorMap[c] === color) same = true;
                } else if (c >= "0" && c <= "9") {
                    if (color === "orange") same = true;
                }
                if (!same) break;
                j++;
            }
            result += `<span style="color: ${color}">${code.slice(i, j)}</span>`;
            i = j;
        } else {
            result += ch;
            i++;
        }
    }
    return result;
}
