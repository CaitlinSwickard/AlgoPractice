// function to add all the numbers in an array and return the total

let arraySum = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    sum += currentNum;
  }
  return sum;
}