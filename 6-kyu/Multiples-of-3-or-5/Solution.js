function solution(number) {
    if (number < 0) return 0;

    const added = [];

    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            if (!added.includes(i)) {
                added.push(i);
            }
        } else if (i % 3 === 0 || i % 5 === 0) {
            added.push(i);
        }
    }
    console.log(added);
    return added.reduce((acc, num) => acc + num, 0);
}
