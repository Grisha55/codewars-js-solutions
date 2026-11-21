function alphabetWar(battlefield) {
    if (!battlefield.includes("#")) {
        return battlefield.replace(/[\[\]]/g, "");
    }
    const shelters = [];
    const re = /\[([a-z]*)\]/g;
    let m;
    while ((m = re.exec(battlefield)) !== null) {
        shelters.push({
            start: m.index,
            end: m.index + m[0].length,
            content: m[1],
        });
    }
    const countHash = (from, to) => {
        let c = 0;
        for (let i = from; i < to; i++) if (battlefield[i] === "#") c++;
        return c;
    };
    let result = "";
    for (let i = 0; i < shelters.length; i++) {
        const s = shelters[i];
        const prevEnd = i > 0 ? shelters[i - 1].end : 0;
        const nextStart =
            i + 1 < shelters.length
                ? shelters[i + 1].start
                : battlefield.length;
        if (countHash(prevEnd, s.start) + countHash(s.end, nextStart) < 2) {
            result += s.content;
        }
    }
    return result;
}
