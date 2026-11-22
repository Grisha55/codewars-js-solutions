function mostLikely(prob1, prob2) {
    const [f, fs] = prob1.split(":").map(Number);
    const [s, ss] = prob2.split(":").map(Number);

    return f / fs > s / ss;
}
