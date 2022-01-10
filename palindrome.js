// need to remove all non-alphanumeric characters and lowercase string
// create a variable to hold the string 
// split the string into individual letters 
// reverse the string 
// re join the string 
// run reversed string through if statement

function isPalindrome(str) {
  var reversedString = str
    .split("")
    .reverse()
    .join("")

  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
}
isPalindrome("rotor");



// using regex to remove non-alphanumeric characters and lowercase string
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, " ");
  var reverseStr = lowRegStr.split("").reverse().join("");

  if (reverseStr === str) {
    return true;
  } else {
    return false;
  }
};
palindrome("rotor");