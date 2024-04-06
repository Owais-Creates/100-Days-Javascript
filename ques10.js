//*-------------------------------------------------
// Programming Question - Find if Arrays are equal.
//*-------------------------------------------------

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
        return `Only ${counter} elements are equal rest are not which is : ${equalElements}`
    }

}

const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]

console.log(
    isArraysEqual(arr1, arr2) //OUTPUT - The arrays are equal.
);