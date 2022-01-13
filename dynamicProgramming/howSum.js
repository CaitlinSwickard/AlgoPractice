// write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as args.

// the function should return an array containing any combination of elements that add up exactly to the targetSum
// if there is no combination that adds up to the targetSum, then return null

// if there are multiple combinations possible, you may return any single one.

// howSum(7, [5, 3, 4, 7]) could return -> [3,4] or -> [7]
// howSum(7, [2, 4]) -> null
// howSum(0, [1, 2, 3]) when targetSum = 0 return an empty array -> []

// FIRST DRAFT OF FUNCTION 
const howSum = (targetSum, numbers) => {
  // base cases
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  // branching logic
  for (let num of numbers) {
    const remainder = targetSum - num;
    // recursive call, but what time of data to return, no matter what we get back save to a variable
    const remainderResult = howSum(remainder, numbers);
    // if not null that means there is a possibility for a result
    if (remainderResult !== null) {
      // we need to return the remainder result PLUS the element that we took 
      // use the spread operator(copy elements) + add on the num we just took
      return [...remainderResult, num];
    }
  }
  // if the for loop finishes and we didnt find a target sum
  return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
// console.log(howSum(300, [7, 14])); too big to run for this function



// SECOND DRAFT OF FUNCTION
const howSum2 = (targetSum, numbers, memo = {}) => {
  // use target sum as key 
  if (targetSum in memo) return memo[targetSum];
  // base cases
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    // dont forget to pass memo down to the recursive call as arg
    const remainderResult = howSum2(remainder, numbers, memo);
    if (remainderResult !== null) {
      // take return lines and store them in memo
      memo[targetSum] = [...remainderResult, num];
      // complete return values 
      return memo[targetSum];
    }
  }
  // take return and store in memo
  memo[targetSum] = null;
  return null;
};

console.log(howSum2(7, [2, 3])); // [3, 2, 2]
console.log(howSum2(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum2(7, [2, 4])); // null
console.log(howSum2(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum2(300, [7, 14])); // null

