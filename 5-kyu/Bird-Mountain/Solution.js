function peakHeight(mountain) {
    if (!mountain || mountain.length === 0) return 0;

    const rows = mountain.length;
    const cols = mountain[0].length;

    // Инициализируем матрицу out
    const out = Array(rows)
        .fill()
        .map(() => Array(cols).fill(0));

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (mountain[y][x] === " ") {
                out[y][x] = 0;
            } else {
                out[y][x] = 1;
            }
        }
    }

    let old = [];
    let changed = true;

    // Продолжаем, пока есть изменения
    while (changed) {
        changed = false;

        // Сохраняем копию текущего состояния
        old = out.map((row) => [...row]);

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                // Пропускаем пробелы
                if (mountain[y][x] === " ") continue;

                let n = 0,
                    s = 0,
                    e = 0,
                    w = 0;

                // Получаем значения соседей
                if (y > 0) n = old[y - 1][x];
                if (y < rows - 1) s = old[y + 1][x];
                if (x > 0) w = old[y][x - 1];
                if (x < cols - 1) e = old[y][x + 1];

                // Если все соседи > 0, обновляем значение
                if (n > 0 && s > 0 && e > 0 && w > 0) {
                    const newValue = Math.min(n, s, e, w) + 1;
                    if (newValue !== out[y][x]) {
                        out[y][x] = newValue;
                        changed = true;
                    }
                }
            }
        }
    }

    // Находим максимальное значение
    let maxHeight = 0;
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (out[y][x] > maxHeight) {
                maxHeight = out[y][x];
            }
        }
    }

    return maxHeight;
}
