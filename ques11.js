//*-------------------------------------------------
// Programming Question - Remove duplicate elements.
//*-------------------------------------------------

// Write a function removeDuplcates which takes array as an input and removes duplicate elements from the array.

const removeDuplicates = (arr) => {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

const arr = [1, 2, 3, 4, 5, 5, 5];
const newArr = removeDuplicates(arr);
console.log(newArr); // Output: [ 1, 2, 3, 4, 5 ]

