function wrap(height, width, length) {
    const dims = [height, width, length].sort((a, b) => a - b);
    const [min, mid, max] = dims;
    return 2 * (mid + max) + 4 * min + 20;
}
