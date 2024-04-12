//*-------------------------------------
// Programming Question - Camel Casing.
//*-------------------------------------

// Write a function toCamelCase which takes str as an input and return the camel cased version.


const toCamelCase = (str) => {

    let camelCaseStr = "";

    // Remove extra spaces from start and the back
    str = str.trim();

    // Lower casing all the string to prevent any unwanted upperCased chracters.
        str = str.toLowerCase();
    
    for (i = 0; i < str.length; i++) {

        if (i == 0) {
            camelCaseStr += str[i].toLowerCase();

        } else if (str[i] === ' ') {
            camelCaseStr += String.fromCharCode(str[i + 1].charCodeAt()-32);
            i++;

        } else {
            camelCaseStr += str[i]
        }

    }

    return `Camel Cased --> ${camelCaseStr}`;
}


console.log(
toCamelCase("Hello woRld fRom OwaiS")//OUTPUT - Camel Cased --> helloWorldFromOwais
);

