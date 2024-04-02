//*-------------------------------------------------
// Programming Question - Sort an Array.
//*-------------------------------------------------

//* Ques--> Write a function sortArray to sort an array of numbers in ascending order. 

const sortArray = (arr) => {

    for (i = 0; i < arr.length; i++) {

        for (j = i + 1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }
    }

    return arr

}

console.log(sortArray([4, 5, 6, 7, 8, 1, 2, 3])); //OUTPUT - [ 1, 2, 3, 4, 5, 6, 7, 8]




