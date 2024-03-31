
//*-------------------------------------------------
// Programming Question - Hash Tag Generator.
//*-------------------------------------------------

//* Ques --> You are required to implement a function generateHash that generates a hash tag from a given input string.

// THE HASHTAG SHOULD BE CONSTRUCTED AS FOLLOWS

//? The input string should be converted to a hashTag format, where each word is capitalized and concatinated together without a space.

//? If the length of the input string is greater than 20 characters or is the input string is empty or contains only whitespace, the function should return false.

const generateHash = (str) => {

    if (str.length > 50 || str.trim().length == "") {
        return false;
    }

    let hash = "#"
    const splitStr = str.trim().split(" ")

    for (i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
        hash += splitStr[i]
    }

    return hash;
}


console.log(
    generateHash("100 days javascript challenge")
);

// OUTPUT : #100DaysJavascriptChallenge

