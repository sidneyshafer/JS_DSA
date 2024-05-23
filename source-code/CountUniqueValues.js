// Implement a function called which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// SOLUTION 1
function countUniqueValues(arr) {
  let pointer = 0;
  let count = 0;
  while(pointer < arr.length) {
    if(arr[pointer] !== arr[pointer + 1]) {
      arr.splice(pointer, 0);
      count++;
      pointer++;
    }
    else {
      pointer++;
    }
  }
  return count;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
console.log("\n");

// A DIFFERENT SOLUTION
function countUniqueValues2(arr) {
  var i = 0;
  for(var j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i !== 0 ? i + 1 : 0;
}

console.log(countUniqueValues2([1,1,1,1,1,2]));
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2,-1,-1,0,1]));