
//*-------------------------------------------------
// Programming Question - Longest word in a string.
//*-------------------------------------------------

//* Ques-1 --> Write a function findLongestWord that takes a string as an input and returns the longest word in the string. If there are multiple longest words it should return the first one encountered.

// ---> Constraints:
// 1.--> The alphabets may contain alphabetic characters, digits, spaces and punctuation.
// 2.--> The input string is non-empty.
// 3.--> The input string may contain multiple words seperated by spaces.

// ---> Note.
// 1.--> If the input string is empty and contain only whitespaces, the function should return a false.
// 2.--> The function should ignore leading and trailing whitespace and determine the longest word.

const findLongestWord = (str) => {
    if (str.trim() == "") {
        return `False --> The provided string is empty`
    }

    const splitStr = str.trim().split(" ");

    let defaultStr = splitStr[0];

    for (i = 1; i < splitStr.length; i++) {
        if (splitStr[i].length > defaultStr.length) {
            defaultStr = splitStr[i];
        }
    }

    return defaultStr;
}

console.log(
    findLongestWord(" hello my name is Owaisiii ")
);

