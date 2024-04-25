
//*--------------------------------------
// Programming Question - Repeat string.
//*--------------------------------------

// Write a function repeatingStr which takes a string and a number as a input and returns the string repeated as per the provided number.

const repeatingStr = (str, num) => {

    if (num < 0) {
        return `can't repeat with a negative number --> (${num})`
    }

    let result = "";

    for (let i = 0; i < num; i++) {
        result += `${str}` + ` `;
    }

    return result;
}

console.log(repeatingStr("abc", 5)); //OUTPUT - abc abc abc abc abc 

console.log(repeatingStr("abc", -1)); //OUTPUT - can't repeat with a negative number --> (-1)
