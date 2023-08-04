function palindome(str) {
  return str === str.split("").reverse().join("");
}

console.log(palindome("burger"));
console.log(palindome("racecar"));
