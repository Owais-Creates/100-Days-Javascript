
//*-------------------------------------------------
// Programming Question - Count occurances of a Character.
//*-------------------------------------------------

//* Ques--> Write a function countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string. 

// ---> Constraints:
// 1.--> The function should be case sensitive and 
// 2.--> The function should handle both uppercase and lowercase characters. 
// 3.--> The input string may contain multiple words seperated by spaces.

const countChar = (str, char) => {

    if (char.length > 2) {
        return `please enter a single character ${char} is not a character `
    }

    str = str.toLowerCase()
    char = char.toLowerCase()

    const splitStr = str.split("")

    let counter = 0;

    for (i = 0; i < splitStr.length; i++) {

        if (splitStr[i] == char) {
            counter++
        }

    }

    return `The Character --> ${char} is present ${counter} times in the given str --> ${str}`

}


console.log(
    countChar("missisipi i", "I")
);

