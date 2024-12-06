function fetchData(callback) {
  setTimeout(() => callback("Data fetched!"), 1000);
}

const timeoutID = setTimeout(() => {
  console.log("This will not run");
}, 3000);
//clearTimeout(timeoutID); // Cancels the timeout
//console.log(timeoutID);

const intervalID = setInterval(() => {
  let i = 0;
  i++;
  console.log(i +"This will stop soon");
}, 1000);

setTimeout(()=> clearInterval(intervalID),5000);

fetchData((data) => console.log(data)); // Logs "Data fetched!" after 1 second
console.log("The End");

//JavaScript functions do not throw errors when you pass more arguments than expected.
// Extra arguments are simply ignored.

function printFunction(a, b) {
  return a + b;
}

const c = printFunction(1, 2, 3);

console.log(c);
