function boxCapacity(length, width, height) {
    const boxSize = 16 / 12;
    return (
        Math.floor(length / boxSize) *
        Math.floor(width / boxSize) *
        Math.floor(height / boxSize)
    );
}
