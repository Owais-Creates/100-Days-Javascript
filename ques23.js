
//*------------------------------------------------
// Programming Question - Find median of the Array.
//*------------------------------------------------

// Write a function findMedianArr which takes an array as an input and returns the median value of that array. 

// If the array has odd number of elements the median is the middle element.
// If the array has even number of elements the median is the average of two middle elements.


const findMedianArr = (arr) => {

    let temp;
    // Sort the array.
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }

        }
    }

    //Median Calculation.
    if ((arr.length % 2) == 0) {
        return `Median of even length of Array is ${Math.floor((arr[(arr.length / 2)] + arr[(arr.length / 2) - 1]) / 2)}`

    } else {
        return `Median of odd length of Array is ${arr[Math.floor(arr.length/2)]}`
    }

}

//For odd
const arr1 = [8, 6, 5, 7, 4, 3, 2];
// //Sorted array - [2, 3, 4, 5, 6, 7, 8];

console.log(
    findMedianArr(arr1) //OUTPUT - Median of odd length of Array is 5
);

// ---------------------------------------------------------------------------------------------------------------------

//For Even
const arr2 = [8, 6, 5, 7, 4, 3, 2, 1];
//Sorted array - [1, 2, 3, 4, 5, 6, 7, 8];

console.log(
    findMedianArr(arr2) // OUTPUT - Median of even length of Array is 4
);
