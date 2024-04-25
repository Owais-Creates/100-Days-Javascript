
//*----------------------------------------
// Programming Question - String Truncate.
//*----------------------------------------


const truncateStr = (str, num) => {

    if (typeof str !== 'string' || typeof num !== 'number' || num <= 0) {
        return "Invalid input: please provide a valid string and a positive number.";
    }

    str = str.trim();

    if (str.length <= num) {
        return `The value of the number is greater than or equal to the length of the string.`;
    }

    let result = "";
    let count = 0;

    for (let i = 0; i < str.length; i++) {


        if (str[i] === " ") {
            continue;
        }

        result += str[i];
        count++;

        if (count === num) {
            break;
        }
    }

    return result + "...";
}

console.log(truncateStr("Hello World", 5)); // Output: "Hello..."

console.log(truncateStr("Hello World", 24)); // Output: The value of the number is greater than or equal to the length of the string.

console.log(truncateStr("%^",-7)); //OUTPUT: Invalid input: please provide a valid string and a positive number.



