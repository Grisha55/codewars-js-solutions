function spinAround(turns) {
    let degree = 0;

    for (const turn of turns) {
        if (turn === "right") {
            degree += 90;
        } else {
            degree -= 90;
        }
    }

    return Math.floor(Math.abs(degree / 360));
}
