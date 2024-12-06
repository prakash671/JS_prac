const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
const arrFor = new Array();
arr.forEach((item, index) => {
  if (index % 2 == 0) {
    arr[index] = item*2;
    arrFor.push(item*2);
  } else {
    arrFor.push(item);
  }
});

console.log(arr);
console.log('-----For Each-----');
console.log(arrFor);

console.log('-----Map----');
arr1 = arr.map((item, index) => {
  if (index % 2 == 0) {
    item+1;
    return item+1;
  } else {
    return item;
  }
});

console.log(arr1);


// we can't mutate the direct array as it can be mutated only by the index. 
// however we can mutate it by object since it use the reference. 

const arrObj = [{ x: 1 }, { x: 2 }, { x: 3 }];

arrObj.forEach((item) => {
  item.x = item.x * 2; // Modifies the `x` property of the actual object.
  console.log(item);  // Logs the modified object.
});

console.log(arrObj); // Original array is mutated: [{ x: 2 }, { x: 4 }, { x: 6 }]
