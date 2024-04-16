//*-------------------------------------------------------------
// Programming Question - Count multiples after a given number.
//*-------------------------------------------------------------

// Write a function which counts multiples of 3 before a provided number in an array.

const countMultiples = (arr, num) => {

    let counter = 0;

    if (arr.includes(num)) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == num) {

                for (j = 0; j < i; j++) {

                    if (arr[j] % 3 === 0) {
                        counter++;
                    }
                }
                break;

            }
        }
    }else{
        return  'The inputted number is not present in the array.'
    }

    return `The count of multiples of 3 is ${counter}`

}

let arr = [3, 5, 6, 8, 9, 99, 55, 67, 969];
console.log(
    countMultiples(arr, 55) //OUTPUT - The count of multiples of 3 is 4.
);

console.log(
    countMultiples(arr, 1) //OUTPUT - The inputted number is not present in the array.
);