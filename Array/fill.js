let arr = new Array(5);
arr.unshift(1);
arr.fill(0,1,5);
console.log(arr.at(0));
console.log(arr);


let arr1 = new Array(); // Creates an empty array.
arr1.push(1);           // Adds 1 to the array. Now arr = [1].
arr1.fill(0, 1, 4);     // Attempts to fill from index 1 to 4 (exclusive), but there are no elements at those indices.
console.log(arr1);      // Output: [1]

arr.copyWithin(2,0,4)
console.log('after copy with in '+ arr + '\n');

// Input array
let array = Array.of(1, 2, 3, 4, 5, 1, 7);
console.log("Array " + array.copyWithin(4, 1, 3));