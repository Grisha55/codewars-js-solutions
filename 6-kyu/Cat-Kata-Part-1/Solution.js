function peacefulYard(yard, minDistance) {
    const cats = "LMR";
    const positions = [];

    for (let i = 0; i < yard.length; i++) {
        for (let j = 0; j < yard[i].length; j++) {
            if (cats.includes(yard[i][j])) {
                positions.push([i, j]);
            }
        }
    }

    if (positions.length <= 1) return true;

    for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
            const distance = getDistance(positions[i], positions[j]);
            if (distance < minDistance) {
                return false;
            }
        }
    }

    return true;
}

function getDistance(p1, p2) {
    const dx = p1[0] - p2[0];
    const dy = p1[1] - p2[1];
    return Math.sqrt(dx * dx + dy * dy);
}
