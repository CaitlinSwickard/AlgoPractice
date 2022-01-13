// Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and array of numbers as argument.

// The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

// canSum(7(targetSum), [5, 3, 4, 7](array of nums to check though to get targetSum)) -> true
// canSum(7, [5, 3, 4, 7]) -> true // you can use 3+4 or just take 7 as it = targetSum already
// canSum(7, [2, 4]) -> false 


// FIRST DRAFT OF THIS FUNCTION
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  // if you hit 0 you have gone to far
  if (targetSum < 0) return false;

  // branch every number from the num array by iterating though the array
  for (let num of numbers) {
    // this decreases the num from array from targetSum and gives us essentially the new targetSum
    const remainder = targetSum - num;
    // recursive call with remainder and numbers array, because you can reuse the nums in the array as many times as possible
    // if we figure out that it is possible to generate the remainder using numbers of the array then return true
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  // dont return false in the for loop
  return false;
};

console.log(canSum(7, [2, 3])); //true
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2, 4])); //false
console.log(canSum(8, [2, 3, 5])); //true
// console.log(canSum(300, [7, 14])); // this input is too large and the run time is slow



const canSum2 = (targetSum, numbers, memo = {}) => {
  // use the targetSum in the memo as key, numbers array does not change in the return call
  if (targetSum in memo) return memo[targetSum];
  // base cases
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;


  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum2(remainder, numbers, memo) === true) {
      // store the return values that were not base cases in the memo
      memo[targetSum] = true;
      return true;
    }
  }
  // store to memo
  memo[targetSum] = false;
  return false;
};

console.log(canSum2(7, [2, 3])); //true
console.log(canSum2(7, [5, 3, 4, 7])); //true
console.log(canSum2(7, [2, 4])); //false
console.log(canSum2(8, [2, 3, 5])); //true
console.log(canSum2(300, [7, 14]));