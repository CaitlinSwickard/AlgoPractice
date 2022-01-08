// Write code to return the largest number in the given array
// we need to compare all nums against each other
// the first num of the array is our starting pointer
// we need a variable to store the current max number 
// the first num will also be the starting current max number
// loop though the array 
// compare current num with current max number
// if the current number is greater than the current max number, 
// then the current num will become the current max number
// when the loop is done we return the current max number


var array = [6, 15, 2, 56, 74, 5, 1000, 74];
// return max number from array
function getMax(numberArray) {
  var currentMaxNumber = numberArray[0];
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > currentMaxNumber) {
      currentMaxNumber = numberArray[i];
    }
  }
  return currentMaxNumber;
}
console.log(getMax(array));


// return min number from array
function getMin(numberArray) {
  var currentMinNumber = numberArray[i];
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < currentMinNumber) {
      currentMinNumber = numberArray[i];
    }
  }
  return currentMinNumber;
}
console.log(getMin(array));