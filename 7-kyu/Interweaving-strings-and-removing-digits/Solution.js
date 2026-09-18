function interweave(s1, s2) {
    let result = "";
    const maxLen = Math.max(s1.length, s2.length);

    for (let i = 0; i < maxLen; i++) {
        if (i < s1.length) result += s1[i];
        if (i < s2.length) result += s2[i];
    }

    result = result.replace(/\d/g, "");

    return result.trim();
}
