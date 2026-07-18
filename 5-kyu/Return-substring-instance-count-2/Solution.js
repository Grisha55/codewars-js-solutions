function searchSubstr(fullText, searchText, allowOverlap = true) {
    const len = searchText.length;
    let cnt = 0;

    if (len === 0) return 0;

    for (let i = 0; i < fullText.length; i++) {
        const cur = fullText.slice(i, i + len);
        if (cur === searchText) {
            if (!allowOverlap) i += len;
            cnt++;
        }
    }

    return cnt;
}
