//*----------------------------------------------------------
// Programming Question - Power of 2.
//*----------------------------------------------------------

// Write a function isPowerOfTwo which takes a number and checks whether that number is a power of 2 or not.

// Should return true or false.
// Should take positive values only.

const isPowerofTwo = (num) => {
    let result = "";

    if (num <= 0) return "Negative values or 0 are not accepted";

    for (let i = 0; i <= num; i++) {
        if (2 ** i === num) {
            result = `${num} is a power of 2`;
            return result;
        }
    }

    result = `${num} is not a power of 2`;
    return result;
};

console.log(isPowerofTwo(8)); // Output: 8 is a power of 2
console.log(isPowerofTwo(150)); // Output: 150 is not a power of 2

