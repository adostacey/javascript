// https://www.educative.io/blog/level-up-javascript-coding-challenges
function sortString(str) {
  return (stringArray = str.split("").sort().join(""));
}

function anagram(wordOne, wordTwo) {
  const wordOneTr = wordOne.trim();
  const wordTwoTr = wordTwo.trim();
  if (wordOneTr.length !== wordTwoTr.length) {
    return false;
  }
  if (sortString(wordOneTr) === sortString(wordTwoTr)) {
    return true;
  } else {
    return false;
  }
}

console.log(anagram("one", "trinity"));
console.log(anagram("one", "neo"));

// reference: https://www.geeksforgeeks.org/sort-a-string-in-javascript/
