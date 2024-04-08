//*-------------------------------------------------
// Programming Question - Remove duplicate elements.
//*-------------------------------------------------

// Write a function removeDuplcates which takes array as an input and removes duplicate elements from the array.

const removeDuplcates = (arr) => {
    const uniqueArray = [];

    for (i = 0; i < arr.length; i++) {

        let flag = false;

        for (j = 0; j < uniqueArray.length; j++) {
            if (arr[i] == uniqueArray[j]) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            uniqueArray.push(arr[i]);
        }
    }

   return uniqueArray

}

console.log(
    removeDuplcates([1, 2, 2, 3, 4, 2, 5, 5, 5]) //OUTPUT - [ 1, 2, 3, 4, 5 ]
);
