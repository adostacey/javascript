const populations = [
  { city: "Townsville", population: 6000 },
  { city: "Burritoville", population: 1000 },
  { city: "St. Hotdog", population: 5000 },
];

function sortByPop(arr) {
  arr.sort((a, b) => {
    return a.population < b.population ? -1 : +1;
  });
  return arr;
}

console.log(sortByPop(populations));
