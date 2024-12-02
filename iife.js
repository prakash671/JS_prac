let temp_name = "Alice";
console.log("name before IIFE->" + temp_name);

let changeName = (function () {
  temp_name = "Alex";
  return temp_name;
})();

console.log(changeName);
