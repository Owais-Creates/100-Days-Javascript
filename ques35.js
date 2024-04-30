//*------------------------------------------
// Programming Question - Hex Code Generator.
//*------------------------------------------

// Write a function which generates a hex color code from hexadecimal numbers.

const generateRandomNumbers = () => {
    return Math.floor(Math.random() * 16)
}

const generateHexColorCode = (hex) => {
    let colorCode = "#";

    //Loop on hexDigits array;
    for (let i = 0; i < 6; i++) {
        colorCode += hex[generateRandomNumbers()];
    }

    return `Random colorCode is ${colorCode}`

}

//Array of hexadecimal digits
const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

console.log(generateHexColorCode(hexDigits)) //OUTPUT - Random colorCode is #29AC44
