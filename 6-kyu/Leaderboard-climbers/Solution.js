function leaderboardSort(leaderboard, changes) {
    const res = leaderboard.slice();

    for (const ch of changes) {
        const [name, delta] = ch.split(" ");
        const offset = parseInt(delta, 10);
        const oldIdx = res.indexOf(name);
        const newIdx = oldIdx - offset;

        res.splice(oldIdx, 1);
        res.splice(newIdx, 0, name);
    }

    return res;
}
