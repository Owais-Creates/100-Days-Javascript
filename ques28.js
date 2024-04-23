
//*-----------------------------------------
// Programming Question - Remove duplicates.
//*-----------------------------------------

// Write a function that takes a string as input and returns the string with duplicate characters removed. For example, if the input is "hello", the output should be "helo".

const removeOccuringCharacter = (str) => {
    let obj = {}
    let result = "";

    for (i = 0; i < str.length; i++) {
        obj[str[i]] = (obj[str[i]] || 0) + 1;
    }

    for (let j = 0; j < str.length; j++) {
        if (obj[str[j]] > 1) {
            obj[str[j]] -= 1;
        } else {
            result += str[j];
        }
    }

    return result

}

console.log(removeOccuringCharacter("nnaammee")); //OUTPUT - name

