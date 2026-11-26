function howManyPizzas(d) {
    const totalSlices = Math.round((d / 8) ** 2 * 8);
    const pizzas = Math.floor(totalSlices / 8);
    const slices = totalSlices % 8;
    return `pizzas: ${pizzas}, slices: ${slices}`;
}
