function code(s) {
    if (s === "") return "";

    const n = Math.ceil(Math.sqrt(s.length));
    const padded = s.padEnd(n * n, "\v");

    const grid = [];
    for (let i = 0; i < n; i++) {
        grid.push(padded.slice(i * n, i * n + n));
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += grid[n - 1 - j][i];
        }
        result.push(row);
    }

    return result.join("\n");
}

function decode(s) {
    if (s === "") return "";

    const rows = s.split("\n");
    const n = rows.length;

    const result = [];
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += rows[j][n - 1 - i];
        }
        result.push(row);
    }

    return result.join("").split("\v").join("");
}
