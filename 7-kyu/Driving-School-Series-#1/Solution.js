function passed(list) {
    const res = [...list].filter((s) => s <= 18);
    if (res.length === 0) return "No pass scores registered.";
    const finalRes = Math.round(
        res.reduce((acc, n) => acc + n, 0) / res.length,
    );
    return finalRes;
}
