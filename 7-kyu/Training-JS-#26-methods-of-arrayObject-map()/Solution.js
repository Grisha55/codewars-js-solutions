function isolateIt(arr) {
    return arr.map((str) => {
        const len = str.length;
        if (len % 2 === 0) {
            const mid = len / 2;
            return str.slice(0, mid) + "|" + str.slice(mid);
        } else {
            const mid = Math.floor(len / 2);
            return str.slice(0, mid) + "|" + str.slice(mid + 1);
        }
    });
}
