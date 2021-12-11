// TWO NUMBER SUM

array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;
// answer = [11, -1]


// currentNum = x;  x + y = 10;  y = 10 - x
// you could also sort the array first (smallest to largest)



// two for loops
// O(n^2) time | O(1) space
function twoNumSum(array, targetSum) {
  // first loop runs through the length of the array minus the last value
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    // second loop runs through the entire loop of the array
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

// exports.twoNumSum = twoNumSum;



// hash table
// O(n) time | O(n) space
function twoNumSum(array, targetSum) {
  // Initialize  hash table
  const nums = {};
  // iterate through array
  for (const num of array) {
    // Y = targetSum - num (num is the value in the array)
    const potentialMatch = targetSum - num;
    // if the Y value is present in the hash table, then return targetSum - num, num
    if (potentialMatch in nums) {
      return [potentialMatch, num];
      // else store the number in to the hash table
    } else {
      nums[num] = true;
    }
   }
   return [];
}
// exports.twoNumSum = twoNumSum;



// pointers
// sorting the array from smallest to largest numbers
// O(nlog(n)) time | O(1) space
function twoNumSum(array, targetSum) {
  // sorting array
  array.sort((a,b) => a - b);
  // setting left pointer at index position 0
  let left = 0;
  // setting right pointer at end of array
  let right = array.length -1;
  // while left is less than right, add pointers together
  while (left < right) {
    const currentSum = array[left] + array[right];
    // if currentSum = targetSum then return the two nums that equal targetSum
    if (currentSum === targetSum) {
      return [array[left], array[right]];
      // else if currentSum is less than targetSum then move the left pointer up to next position
    } else if (currentSum < targetSum) {
      left++;
      // else if curentSum is greater than targetSum then move the right pointer down to the next position
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
// exports.twoNumSum = twoNumSum;
