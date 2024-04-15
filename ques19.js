//*--------------------------------------------
// Programming Question - Upper or Lower Case.
//*--------------------------------------------

//  Write a function upperOrLowerCase that takes in an input string and determines whether all the characters are upper case, lower case, or a mix of both.

const upperOrLowerCase = (str) => {

    let isUpperCase = true;
    let isLowerCase = true;

    for (let i = 0; i < str.length; i++) {

        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            isLowerCase = false;

        } else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
            isUpperCase = false;

        }else if(isUpperCase && isLowerCase == false){
            break;
        }
    }

    if (isUpperCase) {
        return `The string is in uppercase`;

    } else if (isLowerCase) {
        return `The string is in lowercase`

    } else {
        return ` The string contains both upper and lower case letters.`
    }
}

console.log(upperOrLowerCase("Hello")); //OUTPUT -  The string contains both upper and lower case letters.

console.log(upperOrLowerCase("HELLO")); // OUTPUT - The string is in uppercase.

console.log(upperOrLowerCase("hello")); // OUTPUT - The string is in lowercase.