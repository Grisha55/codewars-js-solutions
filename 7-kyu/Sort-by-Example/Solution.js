function exampleSort(arr, exampleArr) {
    return arr
        .slice()
        .sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));
}
