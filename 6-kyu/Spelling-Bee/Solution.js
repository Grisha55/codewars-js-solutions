howManyBees = function (hive) {
    if (!hive || hive.length === 0) return 0;

    const rows = hive.length;
    const cols = hive[0].length;
    let count = 0;

    const directions = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0], // up
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (hive[r][c] === "b") {
                for (const [dr, dc] of directions) {
                    const r1 = r + dr,
                        c1 = c + dc;
                    const r2 = r + 2 * dr,
                        c2 = c + 2 * dc;
                    if (
                        r1 >= 0 &&
                        r1 < rows &&
                        c1 >= 0 &&
                        c1 < cols &&
                        r2 >= 0 &&
                        r2 < rows &&
                        c2 >= 0 &&
                        c2 < cols
                    ) {
                        if (hive[r1][c1] === "e" && hive[r2][c2] === "e") {
                            count++;
                        }
                    }
                }
            }
        }
    }

    return count;
};
