function robot(skinScan) {
    return skinScan.map((row) =>
        row.map((cell) => (cell === "X" ? "*" : cell)),
    );
}
