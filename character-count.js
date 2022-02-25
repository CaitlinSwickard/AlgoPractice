// Write code to create a function that accepts a string and returns an object 
// containing the number of times each character appears in the string

// const str - 'helLo wOrld'

// one of the most used patterns to solve technical interviews = building a hash mat
// characterCount(str) // { h:1, e:1, l:3, 0:2, ' ': 1, w: 1, r: 1, d: 1}

let str = 'helLo wOrld';

let characterCount = str => {
  if (!str.length) {
    return "must provide a string greater than 0!";
  }

  str = str.toLowerCase();

  let ltrCount = {};
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];

    if (ltrCount[currentLetter]) {
      ltrCount[currentLetter] = ltrCount[currentLetter] + 1;
    } else {
      ltrCount[currentLetter] = 1;
    }
  }
  return ltrCount;
};

console.log(characterCount(str));