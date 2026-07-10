function reverseSlice(str) {
    const res = [];
    for (let i = 0; i < str.length; i++) {
        res.push(
            str
                .slice(0, str.length - i)
                .split("")
                .reverse()
                .join(""),
        );
    }

    return res;
}
