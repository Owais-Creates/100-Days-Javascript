//*-------------------------------------------------
// Programming Question - Find if Arrays are equal.
//*-------------------------------------------------

// Write a function isArraysEqual which takes two array as a param and compares them if they both are equal or not.

// The func can accept positive integers.
// The func can accept negative integers.
// The func can accept alphabets (CASE-SENSITIVE) integers.

const isArraysEqual = (arr1, arr2) => {

    let counter = 0;
    let equalElements = [];

    if (arr1.length != arr2.length) {
        return `Both the arrays are not equal in length so no further calculation`

    } else {
        for (i = 0; i < arr1.length; i++) {

            if (arr1[i] == arr2[i]) {
                counter++
                equalElements.push(arr1[i])
            }

        }
    }

    if (counter == arr1.length) {
        return 'The arrays are equal'
    } else {
        return `Only ${counter} elements are equal which are --> {${equalElements}} rest are not:`
    }

}

const arr1 = [1, 2, 3, 4,5]
const arr2 = [1, 2, 3, 4,6]

console.log(
    isArraysEqual(arr1, arr2) //OUTPUT - The arrays are equal.
);