
//*----------------------------------------
// Programming Question - Popped Element.
//*----------------------------------------

//Write a program which pops out the last elem just like "pop()" method but without actually using it.

const myArr = [1, 2, 3, 4, 5];
console.log("current Array", myArr);

let poppedElement;

function customPop() {

    poppedElement = myArr[myArr.length - 1];
    myArr.length = myArr.length - 1
    return poppedElement;

}

console.log(customPop(), "is the popped element and the new array is", myArr);
/* // OUTPUT -
 current Array [ 1, 2, 3, 4, 5 ]
5 is the popped element and the new array is [ 1, 2, 3, 4 ]
*/