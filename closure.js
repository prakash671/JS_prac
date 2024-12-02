function callFunction() {
  function create_closure(val) {
    return function () {
        console.log('array is function with specified i->'+val +' is called');
      return val;
    };
  }
  let arr =[];
  let i;
  console.log('while initialization')
  for (i = 0; i <= 4; i++ ) {
    arr[i] = create_closure(i);
  }
  return arr;
}

let calledArr = callFunction(); //intialization

console.log(calledArr[1]()); //calling the closure function
