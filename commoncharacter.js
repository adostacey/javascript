// https://www.educative.io/blog/level-up-javascript-coding-challenges
let string = "Do you want ants? This is how you get ants.";

function getCommonChar(string) {
  let charCount = {};
  string = string.toLowerCase();
  for (i = 0; i < string.length; i++) {
    charCount[string[i]];
  }
  return charCount;
}

console.log(getCommonChar(string));

// gave up

// solution
const countingChars = (str) => {
  const charCount = {}; //Step 0
  let maxCharCount = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    // Step 1.
    charCount[str[i]] = ++charCount[str[i]] || 1;
  }

  for (let key in charCount) {
    //Step 2
    if (charCount[key] >= maxCharCount) {
      maxCharCount = charCount[key]; //Step 3
      maxChar = key;
    }
  }

  return maxChar; //Step 4
};
