// write a function `fib(n)` that takes in a number as an argument.
// the function should return the n-th number of the Fibonacci sequence.

// the 1st and 2nd number of the sequence is 1
// to generate the next number of the sequence, we sum the previous two

// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// n:      1, 2, 3, 4, 5, 6,  7,  8,  9, ... (this is the position so the 7th num of the seq(position) is 13)

// FIRST DRAFT OF THIS FUNCTION 
const fib = (n) => {
  // if number is less than or equal to 2 return 1, 
  // this is because the first 2 nums in the fib sequence are both 1
  if (n <= 2) return 1;

  // return the sum of the fib num right before and 2 before the number we are asking for
  // ex: 1, 1, 2, 3  so if we are looking for the 4th position we would sum 2(position 3) + 1(position 2) = 3
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(6));


// SECOND DRAFT OF THIS FUNCTION
// memoization = a method used to store the results of previous function calls to speed up future calculations. 
// If repeated function calls are made with the same parameters, 
// we can store the previous values instead of repeating unnecessary calculations. 
// This results in a significant speed up in calculations.

// memoization
// js object, keys will be arg to function, value will be the return value
// this memo will store n as the key and values will be the return values from the function
const fib2 = (n, memo = {}) => {
  // checking for existence in the memo, if its there return the value with the key[n]
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  // if the value is NOT in the memo then we need to manually do calculation and make the sub tree
  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  // then return value
  return memo[n];
}
console.log(fib2(50));
// memo ends up looking like this as it goes through the tree
// memo {
//   3: 2,
//   4: 3,
//   5: 5,
//   ...
// }