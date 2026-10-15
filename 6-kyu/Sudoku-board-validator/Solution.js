function validateSudoku(board) {
    const size = 9;

    // Проверка строк
    for (let r = 0; r < size; r++) {
        const seen = new Set();
        for (let c = 0; c < size; c++) {
            const val = board[r][c];
            if (val < 1 || val > 9 || seen.has(val)) return false;
            seen.add(val);
        }
    }

    // Проверка столбцов
    for (let c = 0; c < size; c++) {
        const seen = new Set();
        for (let r = 0; r < size; r++) {
            const val = board[r][c];
            if (seen.has(val)) return false;
            seen.add(val);
        }
    }

    // Проверка блоков 3×3
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const seen = new Set();
            for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
                for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
                    const val = board[r][c];
                    if (seen.has(val)) return false;
                    seen.add(val);
                }
            }
        }
    }

    return true;
}
