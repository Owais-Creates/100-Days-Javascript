//*-------------------------------------------------------
// Programming Question - Sum of the digits in the array.
//*-------------------------------------------------------

// Write a function which takes an a number and returns the sum of the number.

const sumOFNumber = (num) => {

    let sum = 0;
    let originalNum = num;

    while (num > 0) {

       sum += num % 10;
       num = Math.floor(num / 10);

    }

    return `The sum of (${originalNum}) --> "${sum}"`

}

console.log(
    sumOFNumber(999999933) //OUTPUT - The sum of (999999933) --> "69"
);
