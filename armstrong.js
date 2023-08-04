function armstrong(num) {
  let sum = 0;
  let numArray;
  // number -> string -> array
  if (typeof num === "number") {
    numArray = String(num).split("");
  } else {
    return "Invalid Number";
  }
  const exp = numArray.length;

  for (let i = 0; i < exp; i++) {
    sum += Number(numArray[i]) ** exp;
  }

  return sum === num;
}
console.log(armstrong(22));
console.log(armstrong(153));

const range = [...Array(50000).keys()];

for (let i = 0; i < range.length; i++) {
  armstrong(i) ? console.log(i) : null;
}

/* chatgpt helped me fix a scope issue 
and also made me realize I misunderstood the exercise.*/
