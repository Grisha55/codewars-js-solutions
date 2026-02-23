function addExtra( listOfNumbers ){
    return [...listOfNumbers, listOfNumbers[listOfNumbers.length] + 1];
}