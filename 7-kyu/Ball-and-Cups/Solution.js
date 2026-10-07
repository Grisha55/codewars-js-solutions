function cupAndBalls(b, arr) {
    let position = b;

    for (const [a, c] of arr) {
        if (position === a) position = c;
        else if (position === c) position = a;
    }

    return position;
}
