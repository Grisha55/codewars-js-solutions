function diag2Sym(strng) {
    const rows = strng.split("\n");
    const n = rows.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += rows[n - 1 - j][n - 1 - i];
        }
        result.push(row);
    }

    return result.join("\n");
}
function rot90Counter(strng) {
    const rows = strng.split("\n");
    const n = rows.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += rows[j][n - 1 - i];
        }
        result.push(row);
    }

    return result.join("\n");
}
function selfieDiag2Counterclock(strng) {
    const rows = strng.split("\n");
    const sym = diag2Sym(strng).split("\n");
    const rot = rot90Counter(strng).split("\n");
    const n = rows.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        result.push(rows[i] + "|" + sym[i] + "|" + rot[i]);
    }

    return result.join("\n");
}
function oper(fct, s) {
    return fct(s);
}
