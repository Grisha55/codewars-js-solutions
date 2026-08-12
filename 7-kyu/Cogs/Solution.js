function cogRpm(cogs) {
    if (cogs.length === 0) return 0;
    const sign = cogs.length % 2 === 0 ? -1 : 1;
    return sign * (cogs[0] / cogs[cogs.length - 1]);
}
