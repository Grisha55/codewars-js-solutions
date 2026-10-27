function howManyMeasurements(n) {
    let k = 0;
    let power = 1;

    while (power < n) {
        power *= 3;
        k++;
    }

    return k;
}
