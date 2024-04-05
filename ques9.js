//*-------------------------------------------------
// Programming Question - Find the Average.
//*-------------------------------------------------

// Write a function Average which  takes an array of numbers as input and returns the average of all the elements in that array.

const average = (arr) => {
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    let avg = (sum / arr.length).toFixed(1)
    return `The average is ${avg} `;

}

const arr = [1, 2, 3, 4, 5, -7, -7, 90]
console.log(
    average(arr)
);
