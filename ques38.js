
//*--------------------------------------
// Programming Question - Prime Numbers.
//*--------------------------------------

// Write a program which takes two values "LOWER LIMIT" and "UPPER LIMIT" and print the prime numbers in between the "LL" and "UL"

let lowerLimit = 10;
let upperLimit = 30;

for (i = lowerLimit; i <= upperLimit; i++) {
    let count = 0;

    for (div = 1; div <= i; div++) {
        if (i % div == 0) {
            count++;

            if (count > 2) {
                break
            }
        }
    }

    if (count == 2) {
        console.log(`prime number ${i}`);
    }
}

/*
OUTPUT 
prime number 11
prime number 13
prime number 17
prime number 19
prime number 23
prime number 29
*/