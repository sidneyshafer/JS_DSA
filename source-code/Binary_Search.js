// Write a function that accepts a sorted array and a value.
// Create a left pointer at the start of the array, and a right pointer at the end of the array.
// While the left pointer comes before the right pointer: 
  // 1). Create a pointer in the middle 
  // 2). If you find the value you want, return the index
  // 3). If the value is too small, move the left pointer up
  // 4). If the value is too large, move the right pointer down
// If the value is never found, return -1

function binarySearch(arr, val) {

  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) right = middle - 1;
    else left = middle + 1;
    
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1,2,3,4,5],5));
console.log(binarySearch([1,2,3,4,5],6));
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10));
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95));
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100));