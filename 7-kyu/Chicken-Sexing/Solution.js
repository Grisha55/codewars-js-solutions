function correctness(bobsDecisions, expertDecisions) {
    let cnt = 0;

    for (let i = 0; i < bobsDecisions.length; i++) {
        const bobs = bobsDecisions[i];
        const expert = expertDecisions[i];

        if (bobs === expert) cnt++;
        else if (expert === "?" || bobs === "?") cnt += 0.5;
    }

    return cnt;
}
