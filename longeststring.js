// https://www.educative.io/blog/level-up-javascript-coding-challenges
let strings = ["Malory", "Pam", "Lana", "Archer"];

function getLongestString(stringArr) {
  let longest = "";
  for (i = 0; i < stringArr.length; i++) {
    if (stringArr[i].length > longest.length) {
      longest = stringArr[i];
    }
  }
  return longest;
}

console.log(getLongestString(strings));
