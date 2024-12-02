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

console.log('with Promises Race',asynchronousFunction1());

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
