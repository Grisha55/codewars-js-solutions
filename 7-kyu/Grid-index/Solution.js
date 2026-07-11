function gridIndex(grid, indices) {
    const flat = grid.flat();
    let result = "";

    for (let i = 0; i < indices.length; i++) {
        result += flat[indices[i] - 1];
    }

    return result;
}
