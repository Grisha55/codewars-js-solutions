function josephusSurvivor(n, k) {
    let player = 0;
    for (let i = 2; i <= n; i++) {
        player = (player + k) % i;
    }

    return player + 1;
}
