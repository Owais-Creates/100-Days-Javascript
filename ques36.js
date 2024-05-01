
//*------------------------------------------
// Programming Question - Remove Duplicates.
//*------------------------------------------

// Write a function which takes an array as an input and removes the duplicate elements from it.
// It can take numbers only , alphabets only or can take both.


const removeDuplicates = (arr) => {

    // create map
    const map = {}

    //result array
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1
    }

    //Loop on map
    for (let j = 0; j < arr.length; j++) {

        if (map[arr[j]] > 1) {
            map[arr[j]] = map[arr[j]] - 1;

        } else {
            result.push(arr[j])
        }
    }

    return result;

}

console.log(
    removeDuplicates(["a", "b", "a", "a"]) //OUTPUT - [ 'b', 'a' ]
);

console.log(
    removeDuplicates([1, 2, 1, 2, 1, 1, 1, 4, 4, 5, 1, 1, 1]) //OUTPUT - [ 2, 4, 5, 1 ]
);