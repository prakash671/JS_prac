// basic async
async function aysFunction() {
  return "Asynchronous function sample";
}

aysFunction().then((data) => {
  console.log(data);
});

// async await

function asynchronousFunction() {
  let promise1 = Promise.resolve("promise 1 is resolved successfully");
  let promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("this method is 1s delay due to timeout");
    }, 1000);
  });

  let combinedPromises = Promise.all([promise1, promise2]);
  return combinedPromises;
}

function asynchronousFunction1() {
  let promise1 = Promise.resolve("promise 1 is resolved successfully");
  let promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("this method is 1s delay due to timeout");
    }, 1000);
  });

  let combinedPromises = Promise.race([promise1, promise2]);
  return combinedPromises;
}

// When you call asynchronousFunction1(), it immediately returns the Promise object created by Promise.race. However:
// 	•	A Promise represents a future value, meaning the result will only be available once the asynchronous operation settles (resolves or rejects).
// 	•	When you log the Promise, it shows Promise { <pending> } because it hasn’t settled yet.

console.log("with Promises Race", asynchronousFunction1());

asynchronousFunction1().then((result) => {
  console.log(result);
});

function display() {
  let synchornousFrunction = asynchronousFunction();
  console.log("inside Display without async await.....");

  console.log(synchornousFrunction);
}

async function asyncAwaitFn() {
  let awaitFunc = await asynchronousFunction();
  console.log("inside Display async await.....");
  console.log(awaitFunc);
}

display();
asyncAwaitFn();
