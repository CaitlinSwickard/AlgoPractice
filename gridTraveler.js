// Say that you are a traveler on a 2D grid. You begin in the top-left corner
// and your goal is to travel to the bottom-right corner. You may only move down or right. You

// In how many ways can you travel to the goal on a grid with dimensions m * n?

// write a function `gridTraveler(m , n)` that calculates this.

// FIRST DRAFT OF FUNCTION
const gridTraveler = (m, n) => {
  // base case for 1*1 gird
  if (m === 1 && n === 1) return 1;
  // base case for invalid 0 grid 
  if (m === 0 || n === 0) return 0;
  // moving DOWN reduces m (m -1), moving right reduces n (n -1)
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));


// SECOND DRAFT OF FUNCTION
const gridTraveler2 = (m, n, memo = {}) => {
  // are the args in the memo?
  // we need a key to hold both of the args m, n in the object
  // use comma to make sure the nums dont combine to one num
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
// manual calculation for the function
  memo[key] = gridTraveler2(m - 1, n, memo) + gridTraveler2(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveler2(1, 1));
console.log(gridTraveler2(2, 3));
console.log(gridTraveler2(3, 2));
console.log(gridTraveler2(3, 3));
console.log(gridTraveler2(18, 18));