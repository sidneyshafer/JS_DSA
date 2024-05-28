// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  let total = 1;
  if (arr.length === 0) return total;
  total *= arr[0] * productOfArray(arr.slice(1));
  return total;
}

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));