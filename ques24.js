//*---------------------------------------------------
// Programming Question - Upper and Lower Characters.
//*---------------------------------------------------

// Write a function called  upperAndLower that takes in an string and returns the upper case , lower case and garbage characters in a seperate array.

const upperAndLower = (str) => {

    str = str.trim();

    let upper = [];
    let lower = [];
    let garbage = [];

    for (let i = 0; i < str.length; i++) {

        // Handling edge case of spacing.
        if (str[i] === " ") {
            continue;

        }else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() < 122) {
            lower.push(str[i]);

        } else if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() < 90) {
            upper.push(str[i]);

        } else {
            garbage.push(str[i]);
        }

    }

    if (garbage.length > 0) {
        return `UpperCase- (${upper}) and LowerCase - (${lower}) and rest are garbage characters - (${garbage}).`

    } else {
        return `UpperCase- (${upper}) and LowerCase - (${lower}) and have no garbage character.`

    }

}

console.log(
    upperAndLower("AbCdEfGHI") 
    //OUTPUT - UpperCase- (A,C,E,G,H,I) and LowerCase - (b,d,f) and have no garbage character.
);

console.log(
    upperAndLower("AbCdEfGHI#$^562") 
    //OUTPUT - UpperCase- (A,C,E,G,H,I) and LowerCase - (b,d,f) and rest are garbage characters - (#,$,^,5,6,2).
); 
