//*-------------------------------------------------------
// Programming Question - Count the vowels in the string.
//*-------------------------------------------------------

// Write a function countVowels which takes string as an input and  returns  the number of vowels present in that string. 

const countVowels = (str) => {

    const vowels = ["a", "e", "i", "o", "u"];
    const lowerCasedStr = str.toLowerCase();
    let vowelChar = [];
    let count = 0;

    for (i = 0; i < lowerCasedStr.length; i++) {

        for (j = 0; j < vowels.length; j++) {

            if (lowerCasedStr[i] == vowels[j]) {
                vowelChar[count] = lowerCasedStr[i];
                count++;
            }

        }
    }

    return `The count of vowels --> "${count}" which is (${vowelChar}) `;

}

console.log(
    countVowels("The quick brown fox")
);

//OUTPUT - The count of vowels --> 5 which is {e,u,i,o,o} 

