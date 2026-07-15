function golfScoreCalculator(parList, scoreList) {
    let res = 0;

    for (let i = 0; i < parList.length; i++) {
        res += +scoreList[i] - +parList[i];
    }

    return res;
}
