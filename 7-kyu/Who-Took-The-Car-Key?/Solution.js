function whoTookTheCarKey(message) {
    let res = "";
    for (const b of message) {
        res += String.fromCharCode(parseInt(b, 2));
    }
    return res;
}
