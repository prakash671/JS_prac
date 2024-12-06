const promise = new Promise((resolve, reject) => {
  isUserExists = true;
  if (isUserExists) {
    resolve("User exists in the data");
  } else {
    //if isUserExists is false, nothing happens when there’s no reject. The catch block will never be executed.
    reject("Error not promise");
  }
});

const chancePromise = new Promise((resolve, reject) => {
  isChanceExists = true;
  if (isChanceExists) {
    resolve("chance exists for user");
  } else {
    reject("Error not chancePromise");
  }
});

const luckPromise = new Promise((resolve, reject) => {
  ispreiodExists = true;
  if (ispreiodExists) {
    resolve("luck exists for this User");
  } else {
    reject("Error not luckPromise");
  }
});

promise
  .then(
    (result) => console.log(result),
    luckPromise
      .then(function (chance) {
        console.log(chance);
      })
      .catch((error) => {
        console.log(error);
      })
  )
  .catch((error) => {
    console.log(error);
  });


const promiseReject = new Promise((resolve, reject) => {
  reject("promise rejected");
});

// promise all is typically used like completeable futures where it waits for all to get completed

/* if this reject, promise ALL method will fail because this wants to be executed without failure should be success, 
however race wont fail because this not the first method that is being executed
*/

Promise.all([promise, chancePromise, luckPromise]).then(
  (promises) => {
    console.log("---------- Promises ALL----------");
    promises.forEach((prom, i) => {
      i++;
      console.log(i + "." + prom);
    });
  },
  (err) => {
    console.log("---------- Promises ALL---------");
    console.log(err);
  }
);

const promise1 = new Promise((resolve, reject) => {
  resolve("promise is resolved successfully");
});

Promise.race([promise, promise1, promiseReject])
  .then((promises) => {
    console.log("---------- Promises Race---------");
    console.log(promises);
  })
  .catch((err) => {
    console.log("---------- Promises Race---------");
    console.log(err);
  });
