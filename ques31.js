//*----------------------------------------
// Programming Question - Reverse a number.
//*----------------------------------------

// Write a function reverseNumber which takes a number as an input and reverses that number using operators only.

const reverseNumber = (num) => {
    let result = 0;
    let numberOfDigits = 0;
    let originalNum = num;

    while (num > 0) {
        num = Math.floor(num / 10)
        numberOfDigits++;
    }

    if (numberOfDigits == 1) {
        return `The number is only one digit hence cannot be reversed`;

    } else {
        num = originalNum

        while (num > 0) {
            let lastDigit = num % 10;
            result = result * 10 + lastDigit;
            num = Math.floor(num / 10);

        }
    }

    return `The reversed number is ${result}`;

}
console.log(reverseNumber(123123)); //OUTPUT - The reversed number is 321321
