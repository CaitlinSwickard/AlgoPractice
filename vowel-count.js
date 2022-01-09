// Write code to return the the number of vowels in `str`
// return a numerical value, not the vowels
// we need a variable to hold the count, count should start at 0
// create a variable to hold the value of the vowels
// we need to loop through the string to count the vowels
// use indexOf to assign a numeric value to the vowels, it will assign a value between 0-4
// anything not a vowel will return as a -1, check against -1 to count vowels
// lowercase string for edge case

var vowelCount = function (str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) > -1) {
      count++;
    }
  }
  return count;
}

vowelCount("How many vowels are in this string?")

// Alternatively, this problem could have been solved without the use of `indexOf`, 
// but by using the logical OR (||) operator to check for each vowel

var vowelCount = function (str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();

    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      count++
    }
  }
  return count;
};

vowelCount("How many vowels are in this string?")