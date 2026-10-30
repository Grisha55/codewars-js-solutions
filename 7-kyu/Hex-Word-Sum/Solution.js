function hexWordSum(str) {
    return str
        .split(" ")
        .map((word) => {
            const hex = word.replace(/O/g, "0").replace(/S/g, "5");
            return /^[0-9A-F]+$/.test(hex) ? parseInt(hex, 16) : 0;
        })
        .reduce((sum, n) => sum + n, 0);
}
