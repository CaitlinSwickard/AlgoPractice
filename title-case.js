// write code to create a function that takes a string and returns 
// a new string with the first letters of each word capitalized

// const str = 'hello my name is caitlin'
// const titleCase(str) = "Hello My Name Is Caitlin"

// stings are immutable - turn into an array and then return the new string

const str = "hello my name is caitlin";

const titleCase = function(str) {
  // creating empty array
  const resultArr = [];

  const strArr = str.split(' ');
  strArr.forEach(str => {
    // uppercase 1st letter and return the rest of string
    const titleCased = str[0].toUpperCase() + str.substring(1);
    // push new string with capital letters into resultArr
    resultArr.push(titleCased);
  })
  // return and join the sting
  return resultArr.join(' ');
}

console.log(titleCase(str));