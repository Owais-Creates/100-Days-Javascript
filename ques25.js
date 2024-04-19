
//*------------------------------------------
// Programming Question - Sort from A to B.
//*------------------------------------------

// Write a function which takes a string as an input which has alphabets jumbled from A to Z and return the sorted version of it.

const sortFromAtoB = (str) => {

    str = str.toUpperCase()
    let asciiCode = 65;
    let res = "";
    let prevIndex = 0;

    while (asciiCode <= 90) {

        for (let i = prevIndex; i < str.length; i++) {

            if (str[i].charCodeAt() === asciiCode) {
                res += str[i];
                asciiCode++;
                prevIndex = i + 1;
                break;
            }
        }
    }

    return `Sorted --> ${res}`;
}

let str = "plmokijnuhbygvtfcradxeszqw.";
console.log(
    sortFromAtoB(str) //OUTPUT - Sorted --> ABCDEFGHIJKLMNOPQRSTUVWXYZ.

);