const array1 = new Array(1, 2, 3, 4, 5);

let array2 = new Array();

// array2.push(array1);

array2 = array1;

console.log(array2);
console.log(array2.at(0));
oddSortedArray = array2.sort((a, b) => {
  const isOddA = a % 2 != 0;
  const isOddB = b % 2 != 0;

  if (isOddA && !isOddB) return -1;
  if (!isOddA && isOddB) return 1;

  return 0;
});
console.log(oddSortedArray);
console.log('-----Reduce-----');
// reduce is used to turn array to single value from left right;
oddSortedArray.reduce((accum, crrValue) => {
  console.log("Accumulator->" + accum);
  console.log("Current Value->" + crrValue);
  return accum + crrValue;
}, 0);

console.log('-----Reduce Right-----');

oddSortedArray.reduceRight((accum, crrValue) => {
    console.log("Accumulator->" + accum);
    console.log("Current Value->" + crrValue);
    return accum + crrValue;
  }, 0);

  const entriesTrack = oddSortedArray.entries();

  for (var i of entriesTrack ) {
     console.log(i);
  }



