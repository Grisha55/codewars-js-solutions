function alexMistakes(numberOfKata, timeLimit) {
    const timePerKata = 6;
    let timeForKata = numberOfKata * timePerKata;
    let remainingTime = timeLimit - timeForKata;

    if (remainingTime < 5) return 0;

    let mistakes = 0;
    let pushupTime = 5;

    while (remainingTime >= pushupTime) {
        remainingTime -= pushupTime;
        mistakes++;
        pushupTime *= 2;
    }

    return mistakes;
}
