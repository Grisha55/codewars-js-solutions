function countName(anArr, name) {
    //anArr is an array of strings. name is a single string
    //This function should return the total number of times the name string is found in anArr.
    //Your code here
    let cnt = 0;
    for (const s of anArr) {
        if (s === name) cnt++;
    }
    return cnt;
}
