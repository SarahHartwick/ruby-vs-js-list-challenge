//Create an any function that accepts an array and a function,
//and returns true if the function returns true for any item in the array.
//If the array is empty, the function should return false.

let any = function(array, callback) {
  let isTrue = false;
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      isTrue = true;
    }
  }
  if (isTrue) {
    return true;
  }
  else {
    return false;
  }
};
