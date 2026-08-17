function sortByArea(array) {
    const getArea = (o) => {
        if (Array.isArray(o)) {
            return o[0] * o[1];
        } else {
            return Math.PI * (o * o);
        }
    };

    return [...array].sort((a, b) => getArea(a) - getArea(b));
}
