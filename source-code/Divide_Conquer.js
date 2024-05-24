// Given a sorted array of integers, write a function that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

// Linear Search
function search(arr, val) {
  for (i of arr) {
    if (i === val)
      return arr.indexOf(i);
  }
  return -1;
}

console.log(search([1,2,3,4,5,6], 4)); // 3
console.log(search([1,2,3,4,5,6], 6)); // 5
console.log(search([1,2,3,4,5,6], 11)); // -1

// Refactored Solution - Binary Search
function search2(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentEl = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    }
    else if (arr[middle] > val) {
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}

console.log(search2([1,2,3,4,5,6], 4)); // 3
console.log(search2([1,2,3,4,5,6], 6)); // 5
console.log(search2([1,2,3,4,5,6], 11)); // -1