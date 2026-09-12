function trianglePerimeter(triangle) {
    const distance = (p1, p2) =>
        Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

    const { a, b, c } = triangle;

    return distance(a, b) + distance(b, c) + distance(c, a);
}
