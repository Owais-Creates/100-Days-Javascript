
//*-------------------------------------------------
// Programming Question - Find the factorial.
//*-------------------------------------------------

// Write a function factorial which takes a positive integer and returns its factorial. 
// For example, if you call `factorial(5)`, it should return `120`. If you call `factorial(-3)` it should throw an error because negative numbers.

const factorial = (num) => {

    if (num < 0) {
        return `${false} because of negtive number ${num} `
    }

    let fac = 1;
    const originalNum = num;

    while (num > 0) {
        fac = fac * num;
        num--
    }
    return `Factorial of ${originalNum} is ${fac}`

}

console.log(
    factorial(5)
);