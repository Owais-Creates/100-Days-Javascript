
//*----------------------------------------
// Programming Question - Index Of.
//*----------------------------------------

// Write a function to know the index of a specific elem without using the inbuilt function.

const indexOf = (arr) => {
    let specificElem = 5;
    let indexPosition;
    let isPresent = arr.includes(specificElem);

    if (!isPresent) {
        console.log(`elem is not present`);

    }

    for (i = 0; i < arr.length; i++) {

        if (specificElem == arr[i]) {
            indexPosition = i;
        }
    }

    return `index position is --> ${indexPosition}`

}

const arr = [1, 2, 3, 5, 4, 6];
console.log(indexOf(arr)); //OUTPUT - index position is --> 3. 

