function cypher(string) {
    const cypher = {
        Il: 1,
        Rz: 2,
        Ee: 3,
        Aa: 4,
        Ss: 5,
        Gb: 6,
        Tt: 7,
        B: 8,
        g: 9,
        Oo: 0,
    };

    let res = "";
    for (const c of string) {
        let found = false;
        for (let key in cypher) {
            if (key.includes(c)) {
                res += cypher[key];
                found = true;
            }
        }
        if (!found) {
            res += c;
        }
    }

    return res;
}
