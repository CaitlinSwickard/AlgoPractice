// TWO NUMBER SUM

array = [3, 5, -4, 8, 11, 1, -1, 6];
targetSum = 10;
// answer = [11, -1]


// currentNum = x;  x + y = 10;  y = 10 - x
// you could also sort the array first (smallest to largest)

// two for loops
// O(n^2) time | o(1) space
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