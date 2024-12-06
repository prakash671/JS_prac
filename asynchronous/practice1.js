//broswer API try in browser console tabs;

// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
//   console.log(position.coords.altitude);
// });

// promises
const downloadPromise = new Promise((resolve, reject) => {
  let fileExisits = true;
  if (fileExisits) {
    resolve("File downloaded!");
  } else {
    reject("Download failed");
  }
});

downloadPromise
  .then((file) => {
    console.log(file);
  })
  .then(
    setTimeout(() => {
      console.log("processing the file");
    }, 1000)
  )
  .catch((err) => {
    console.log(err);
  });
