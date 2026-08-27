function pattern(n) {
    if (n <= 0) return "";
    const nums = [];
    for (let i = 1; i <= n; i++) nums.push(String(i));
    const rows = [];
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += nums[(i + j) % n];
        }
        rows.push(row);
    }
    return rows.join("\n");
}
