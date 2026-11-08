const someButNotAll = (seq, pred) => {
    const arr = [...seq];
    const count = arr.filter(pred).length;
    return count > 0 && count < arr.length;
};
