function escape(maze) {
    const rows = maze.length;
    const cols = maze[0].length;

    // Look at start position
    const dirs = ["^", "<", "v", ">"];
    let startRow, startCol, startDir;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const idx = dirs.indexOf(maze[r][c]);
            if (idx !== -1) {
                startRow = r;
                startCol = c;
                startDir = idx;
            }
        }
    }

    const dr = [-1, 0, 1, 0];
    const dc = [0, -1, 0, 1];

    const visited = new Set();
    const queue = [];

    queue.push({ r: startRow, c: startCol, dir: startDir, path: [] });
    visited.add(`${startRow},${startCol},${startDir}`);

    while (queue.length > 0) {
        const { r, c, dir, path } = queue.shift();

        if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
            return path;
        }

        const nr = r + dr[dir];
        const nc = c + dc[dir];

        if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            maze[nr][nc] !== "#"
        ) {
            const key = `${nr},${nc},${dir}`;
            if (!visited.has(key)) {
                visited.add(key);
                queue.push({ r: nr, c: nc, dir, path: [...path, "F"] });
            }
        }

        const leftDir = (dir + 1) % 4;
        const keyL = `${r},${c},${leftDir}`;
        if (!visited.has(keyL)) {
            visited.add(keyL);
            queue.push({ r, c, dir: leftDir, path: [...path, "L"] });
        }

        const rightDir = (dir + 3) % 4;
        const keyR = `${r},${c},${rightDir}`;
        if (!visited.has(keyR)) {
            visited.add(keyR);
            queue.push({ r, c, dir: rightDir, path: [...path, "R"] });
        }

        const backDir = (dir + 2) % 4;
        const keyB = `${r},${c},${backDir}`;
        if (!visited.has(keyB)) {
            visited.add(keyB);
            queue.push({ r, c, dir: backDir, path: [...path, "B"] });
        }
    }

    return [];
}
