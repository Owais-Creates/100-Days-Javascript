//*---------------------------------------------
// Programming Question - Reverse a string.
//*---------------------------------------------

// Write a function reverseStr which takes a string as an input and and returns the reversed string.

const reversedStr = (str) => {

    let reversed = "";

    for (let i = 0; i < str.length; i++) {

        reversed += str[str.length - i -1];

    }

    return `Reversed string --> ${reversed}`

}

console.log(
    reversedStr("HellO") //OUTPUT - Reversed string --> OlleH
);