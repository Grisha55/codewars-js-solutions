function makeMeSlow() {
    const start = Date.now();
    while (Date.now() - start < 7000) {
        // busy wait
    }
}
