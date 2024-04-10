//*----------------------------------------------------------
// Programming Question - Sum of sqaure of numbers.
//*----------------------------------------------------------

// Write a function sumOfSquare which takes an array of numbers and return the sum of square of  elements in the array. 


const sumOfSquare = (arr) => {
    let res = 0;

    for (i = 0; i < arr.length; i++) {

        res += arr[i] * arr[i]

    }

    return `The sum of squares of ${arr} is --> ${res} `;
}

const array = [-1, -2, -3] 

console.log(
    sumOfSquare(array) //OUTPUT - The sum of squares of -1,-2,-3 is --> 14.
);