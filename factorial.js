// Write code to create a function that returns the factorial of `num`
// a factorial is the product of all positive integers less than or equal to n
// for example 5 = 5*4*3*2*1 = 120

function factorial(num) {
  let result = num;

  if (num === 0 || num === 1)
  return 1;

  while(num > 1) {
    num--;
    result = result * num;
  }
  return result;
}
factorial(5)