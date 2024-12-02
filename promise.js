const promise = new Promise((resolve, reject) => {
  isUserExists = true;
  if (isUserExists) {
    resolve("User exists in the data");
  } else {
    //if isUserExists is false, nothing happens when there’s no reject. The catch block will never be executed.
    reject("Error not found");
  }
});

const chancePromise = new Promise((resolve, reject) => {
  isChanceExists = true;
  if (isChanceExists) {
    resolve("chance exists for user");
  } else {
    //if isUserExists is false, nothing happens when there’s no reject. The catch block will never be executed.
    reject("Error not found");
  }
});

const luckPromise = new Promise((resolve, reject) => {
  ispreiodExists = true;
  if (ispreiodExists) {
    resolve("luck exists for this User");
  } else {
    //if isUserExists is false, nothing happens when there’s no reject. The catch block will never be executed.
    reject("Error not found");
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
