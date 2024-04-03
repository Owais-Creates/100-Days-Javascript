//*-------------------------------------------------
// Programming Question - Is Palindrome.
//*-------------------------------------------------

//* Ques--> Write a function isPalindrome that takes a string as an input and checks whether the given string in palindrome or not.

// ---> Constraints:
// 1.--> The input string may contain letters, digits, spaces, punctuation and special chracter.
// 2.--> The function should be case in-sensitive.
// 3.--> Ignore spaces punctuations and special characters when determining if a string is palindrome.

const isPalindrome = (str) => {

    let caseInsensitiveStr = str.trim().toLowerCase().replace(/[\W_]/g,'');  
    console.log(caseInsensitiveStr);

    let normalStr; 
    let reversedStr;

    for (i = 0; i < caseInsensitiveStr.length; i++) {
        normalStr += caseInsensitiveStr[i];
        reversedStr += caseInsensitiveStr[caseInsensitiveStr.length - i - 1]
    }

   return normalStr == reversedStr ? `True the string --> "${caseInsensitiveStr}" is palindrome` : `False the string --> "${caseInsensitiveStr}" is not palindrome`

}

console.log(isPalindrome(" A man, a Plan, a CanAl, Panama"));
