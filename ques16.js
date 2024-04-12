//*-----------------------------------------------------
// Programming Question - Smallest number in the array.
//*-----------------------------------------------------

// Write a function  called minNumber that takes an array of numbers as its only argument and returns the smallest number found within.

const minNumber = (arr) => {

    let assumingSmallestNumber = arr[0];

    for (i = 0; i < arr.length; i++) {

        if (arr[i] < assumingSmallestNumber) {
            assumingSmallestNumber = arr[i];
        }

    }

    return ` Smallest number from the array is ---> ${assumingSmallestNumber} `

}

const arr = [100, -2, -1, 33, 99, 9, -999]

console.log(
    minNumber(arr)
);

