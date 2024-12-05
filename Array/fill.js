let arr = new Array(5);
arr.unshift(1);
arr.fill(0, 1, 5);
console.log(arr.at(0));
console.log(arr);

let arr1 = new Array(); // Creates an empty array.
arr1.push(1); // Adds 1 to the array. Now arr = [1].
// Attempts to fill from index 1 to 4 (exclusive), but there are no elements at those indices.
arr1.fill(0, 1, 4);
console.log(arr1);

arr.copyWithin(2, 0, 4);
console.log("after copy with in " + arr + "\n");

// Input array
let array = Array.of(1, 2, 3, 4, 5, 1, 7);
console.log("Array " + array.copyWithin(4, 1, 3));
//practice -> 5 Dec
let arry = Array.of(1, 2, 3, 4, 5);
console.log("here testing " + arry.copyWithin(3, 0, 2));

//multi level array
const numbers = [
  ["1", "2"],
  ["3", "4", ["5", ["6"], "7"], ,],
];

//console.log(numbers);

/*flat is used to falt the multilevel array based on the number given, 
we can also use Infinity */
const flatNumbers = numbers.flat(2);
console.log(flatNumbers);

const flatMapNumbers = flatNumbers
  .flatMap((element) => {
    if(Array.isArray(element))
      return element.map((el) => [el * 2, el ** 2]);
    else
      return [element*2, element**2];
  })
  .flat();
console.log(flatMapNumbers);
