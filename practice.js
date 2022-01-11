// write a function that returns the sum of two numbers 
function add(param1, param2) {
  return param1 + param2;
}





// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year
//  100, the second - from the year 101 up to and including the year 200, etc.

function solution(year) {
  return Math.ceil(year / 100);
}





// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example:
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.
// 7 and 3 produce the largest product.

// declare a variable to hold the current highest num (max)
// that variable need to hold the logic of * the adjacent elements [0] * [1]
// then loop through the array - 1 
// create a new variable to hold the * product (maxMain)
// if that product is greater than or = to max
// then maxMain becomes the new maxMain
// return max

function solution(inputArray) {

  var max = inputArray[0] * inputArray[1];
  for (var i = 0; i < inputArray.length - 1; i++) {
    maxMain = inputArray[i] * inputArray[i + 1];
    if (maxMain >= max) {
      max = maxMain;
    }
  }
  return max;
}
solution(inputArray = [3, 6, -2, -5, 7, 3]);