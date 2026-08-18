function countSalutes(hallway) {
    let r = 0;
    let s = 0;

    for (const c of hallway) {
        if (c === ">") {
            r++;
        } else if (c === "<") {
            s += 2 * r;
        }
    }

    return s;
}
