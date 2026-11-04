function quadraticFormula(a, b, c) {
    const D = b ** 2 - 4 * a * c;

    if (D === 0) {
        return [-b / (2 * a)];
    }

    if (D > 0) {
        const x1 = (-b - Math.sqrt(D)) / (2 * a);
        const x2 = (-b + Math.sqrt(D)) / (2 * a);
        return [x1, x2];
    }

    return [-1, -1];
}
