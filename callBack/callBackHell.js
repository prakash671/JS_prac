function fetchUserData() {
  setTimeout(() => {
    console.log("fetching the user data");
  }, 1000);
}

function processingUserdata(callback) {
  setTimeout(() => {
    console.log("processing the user data");
    callback();
  });
}

function completeUserdata(callback) {
  console.log("user data has been completed");
  callback();
}

completeUserdata(() => {
  console.log("----------going to process the user data---------");
  console.log("---- processing the user data----");
  processingUserdata(() => {
    fetchUserData();
  });
});
