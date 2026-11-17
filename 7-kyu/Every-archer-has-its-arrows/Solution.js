function archersReady(archers) {
    if (archers.length === 0) return false;
    return archers.every((a) => a > 4);
}
