                    // 1. Write a JavaScript function that reverse a number.
                    // Example x = 32243;
                    // Expected Output : 34223

function reverseNumber(num) {
    let numStr = num.toString();
    let resultStr = "";
    for(let i = numStr.length - 1; i >= 0; i--){
        resultStr = resultStr + numStr[i];
    }

    let resultNum = parseInt(resultStr, 10);
    console.log(resultNum);
    console.log(typeof resultNum);
}

reverseNumber(12340);


//solution
//n+"" converts to string.
//split() : creates array of elements splitted
//reverse : reverses array
//join : creates array from elements in array

function reverse_a_number(n){
	n = n + "";
	return n.split("").reverse().join("");
}

console.log(reverse_a_number(32243));



// 2. Write a JavaScript function that checks whether a passed 
// string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads
//  the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {
    let strReversed = str.split("").reverse().join("");
    return str === strReversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("calabaza"));
console.log(isPalindrome("nurses"));
console.log(isPalindrome("cat peep tac"))



// 3. Write a JavaScript function that generates all 
// combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function genComb(phrase) {
    let phraseStr = phrase + "";
    let removeSpaces = phraseStr.replace(/\s+/g, '');
    let result = new Set();

    for(let i = 0; i < removeSpaces.length; i++) {
        for(let j = i; j < (removeSpaces.length - i); j++){
            result.add(removeSpaces.substring(i, j));
        }
    }

    return result;

}

console.log(genComb("caramba"));


