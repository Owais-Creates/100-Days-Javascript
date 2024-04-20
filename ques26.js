//*------------------------------------------
// Programming Question - Reverse an array.
//*------------------------------------------

/* Write a function called reverseArray that takes in an array of integers and returns 
   the reversed version of the array.
*/

const reverseArray = (arr) => {

    let startElement = 0;
    let endElement = arr.length - 1;
    let temp;

    while (startElement < endElement) {

        temp = arr[startElement];
        arr[startElement] = arr[endElement];
        arr[endElement] = temp;

        startElement++;
        endElement--;
    }

    return `The reversed array is: [${arr}].`;
}

let array = [2, 4, 6, 8, 10]

console.log(
    reverseArray(array) //OUTPUT - The reversed array is: [10,8,6,4,2].
);