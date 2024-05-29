// Write a function that accepts an array (of numbers) and a value (number).
// Loop through the array and chech if the current array element is equal to the value.
// If it is, return the index at which the element is found
// if it is never found, return -1

function linearSearch(arr, value) {
  for (var index in arr) {
    if (arr[index] === value) return index;
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15))
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4))
console.log(linearSearch([100], 100))
console.log(linearSearch([1,2,3,4,5], 6))
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10))
console.log(linearSearch([100], 200))