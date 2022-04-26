// Write code to create a function that accepts a string and returns the string in camelCase
// const myStr = 'hello world'
// camelCase(myStr) => 'Hello World'

const camelCase = function (str) {
  // create an array with the string split by the space
  const strArr = str.split(' ');

  // create a result array that is empty
  const resultArr = [];

  // loop through array, uppercase 1st letter, copy the string
  strArr.forEach(word => {
    const upperCase = word[0].toUpperCase() + word.slice(1)
    // push to result array
    resultArr.push(upperCase)
  })
  // return and join with spacing
  return resultArr.join(' ');
}

const myStr = 'hello my name is caitlin'
console.log(camelCase(myStr));

