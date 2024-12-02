function tobeCallbacked(param) {
  console.log("inside tobeCallbacked");

  console.log(param);
}

// function can be passed in the param in js that is called back function 
function callbackFun(callback) { 
  console.log("inside callbackFun");

  let j = "calling from the callBackFunction";
  callback(j);
  console.log("the end");
}

callbackFun(tobeCallbacked);

console.log('-------- Experimental try-----');

function paramFunc(i) {
 console.log(i);;
 
}

function CallFunc(callBack) {
    let a = 'abc'
    callBack(a);
}

CallFunc(paramFunc);

// next try 

let numbers = [1, 2, 3, 4, 5];
function mainFunction(callback) {
  console.log("Performing operation...");
  numbers.forEach(callback);
}
function callbackFunction(number) {
  console.log("Result: " + number);
}

mainFunction(callbackFunction);

