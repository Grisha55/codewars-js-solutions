function distributionOf(golds) {
    let i = 0;
    let j = golds.length - 1;
    let a = 0;
    let b = 0;
    let isA = true;

    while (i <= j) {
        let take;
        if (golds[i] >= golds[j]) {
            take = golds[i++];
        } else {
            take = golds[j--];
        }

        if (isA) a += take;
        else b += take;

        isA = !isA;
    }

    return [a, b];
}
