//*---------------------------------------------
// Programming Question - String and SubString.
//*---------------------------------------------

//Write a function called startsWith which takes a string and a substring and tells if the string starts with that substring or not.


const startsWith = (string, subString) => {

    let str = "";
    let subStr = "";

    for (let i = 0; i < string.length; i++) {
        str += string[i].toLowerCase();
        if (string[i] == " ") {
            break;
        }
    }

    for (let j = 0; j < subString.length; j++) {
        subStr += subString[j].toLowerCase();
    }

    if (str.startsWith(subStr)) {
        return true;
    } else {
        return false;
    }
}

console.log(startsWith("Hello World", "Hello")); //OUTPUT true
console.log(startsWith("Hello World", "Bello")); //OUTPUT false

