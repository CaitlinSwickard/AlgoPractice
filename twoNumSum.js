// TWO NUMBER SUM

array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;
// answer = [11, -1]


// currentNum = x;  x + y = 10;  y = 10 - x
// you could also sort the array first (smallest to largest)



// two for loops
// O(n^2) time | O(1) space
function twoNumSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
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
  const nums = {};
  for (const num of array) {
    const potnetialMatch = targetSum - num;
    if (potnetialMatch in nums) {
      return [potnetialMatch, num];
    } else {
      nums[num] = true;
    }
   }
   return [];
}
// exports.twoNumSum = twoNumSum;



// pointers
// O(nlog(n)) time | O(1) space
function twoNumSum(array, targetSum) {
  array.sort((a,b) => a - b);
  let left = 0;
  let right = array.length -1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
// exports.twoNumSum = twoNumSum;
