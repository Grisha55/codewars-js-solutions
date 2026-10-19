function sumTimesTables(table, min, max) {
    const count = max - min + 1;
    const rangeSum = ((min + max) * count) / 2;

    const tableSum = table.reduce((acc, num) => acc + num, 0);

    return tableSum * rangeSum;
}
