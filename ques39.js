
//*---------------------------------------------------
// Programming Question - Simple interest calculator.
//*---------------------------------------------------

// Write a program that calculates simples interest based on the user inputs.


const simpleInterest = (principalAmount, rateOfInterest, time) => {

    let SI = principalAmount * rateOfInterest / 100 * time;

    return `The answer is --> ${SI}`
}


console.log(simpleInterest(1000, 5, 3));

