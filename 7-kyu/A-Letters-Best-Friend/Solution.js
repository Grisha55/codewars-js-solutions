function bestFriend(txt, a, b) {
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === a) {
            if (i + 1 === txt.length || txt[i + 1] !== b) {
                return false;
            }
        }
    }
    return true;
}
