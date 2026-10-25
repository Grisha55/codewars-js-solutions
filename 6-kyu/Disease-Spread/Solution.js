function epidemic(tm, n, s0, i0, b, a) {
    const dt = tm / n;
    let S = s0;
    let I = i0;
    let R = 0;
    let maxI = I;

    for (let k = 0; k < n; k++) {
        const dS = -dt * b * S * I;
        const dI = dt * (b * S * I - a * I);
        const dR = dt * I * a;

        S += dS;
        I += dI;
        R += dR;

        if (I > maxI) maxI = I;
    }

    return Math.trunc(maxI);
}
