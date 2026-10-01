function bouncingBall(initial, proportion) {
    let height = initial;
    let bounces = 0;

    while (true) {
        height *= proportion;
        bounces++;
        if (height <= 1) {
            break;
        }
    }

    return bounces;
}
