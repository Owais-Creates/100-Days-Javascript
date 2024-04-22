//*-------------------------------------------------------
// Programming Question - Maximum occurence of the number.
//*-------------------------------------------------------

/*
 Write a function maxOccurence which takes the array of integers and returns the most occured integer from the array.
*/

const maxOccurence = (arr) => {

    // Creating the map of the array to get the track of the occurence.
    let arrMap = {};
  
    for (let i = 0; i < arr.length; i++) {
  
        arrMap[arr[i]] = (arrMap[arr[i]] || 0) + 1;
    }
  
    // Traversing through the map to get the most occured integer.
    let count = 0;
    let mostOccured;
  
    for (const value in arrMap) {
  
        if (count < arrMap[value]) {
            count = arrMap[value];
            mostOccured = value;
        }
  
    }
  
    return `The most occured integer is ---> (${mostOccured}).`;
  }
  
  let arr = [1, 3, 4, 6, 5, 6, 5, 7, 6, 6, 6];
  
  console.log(
    maxOccurence(arr) //OUTPUT - The most occured integer is ---> (6).
  );