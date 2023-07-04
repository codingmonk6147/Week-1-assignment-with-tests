/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  // str = str.replaceAll("[^a-zA-Z0-9]", "");
  str = str.replaceAll(" ", "");
  // str = str.replaceAll(",", "");
  // str = str.replaceAll("!", "");
  // str = str.replaceAll(".", "");
  // str = str.replaceAll("?", "");
  str = str.replaceAll("[^a-zA-Z0-9\\s?!]+", "")
  str = str.replace(/[^\w\s]/g, "")
  var low =0;
  var high = str.length-1;

  for(;low<high;low++,high--){
    if(str.charAt(low)!==str.charAt(high)){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
