function killer(suspectInfo, dead) {
    let num = dead.length;
    for (const n in suspectInfo) {
        num = dead.length;
        for (const name of dead) {
            if (suspectInfo[n].indexOf(name) !== -1) {
                num--;
            }
        }
        if (num === 0) return n;
    }

    return -1;
}
