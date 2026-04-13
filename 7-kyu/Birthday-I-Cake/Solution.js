function cake(x, y) {
    if (x === 0) return 'That was close!';
    
    const sum = [...y].reduce((acc, ch, i) => {
        return acc + (i % 2 === 0 ? ch.charCodeAt(0) : ch.charCodeAt(0) - 96);
    }, 0);
    
    return sum > x * 0.7 ? 'Fire!' : 'That was close!';
}