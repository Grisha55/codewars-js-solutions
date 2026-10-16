function pyramidHeight(n) {
    let layers = 0;
    let cubesNeeded = 0;

    while (true) {
        layers++;
        cubesNeeded += layers * layers;
        if (cubesNeeded > n) {
            return layers - 1;
        }
    }
}
