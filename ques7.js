
//*-------------------------------------------------
// Programming Question - Find largest number.
//*-------------------------------------------------

// Write a function largestNumber which takes aan array of numbers and returns the  largest number in that array. 


const largestNumber = (arr) => {
    let number = arr[0]

    for (i = 1; i < arr.length; i++) {

        if (arr[i] > number) {
            number = arr[i]
        }
    }

    return `largest number --> ${number}`
}

console.log(
    largestNumber([2, 3, 4, 56, 7, 100, 5]) //OUTPUT --> largest number --> 100
);