// =======================================================================================================
// Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
// =======================================================================================================

//Example Output
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)


// SOLUTION 1 - NAIVE APPROACH
function same(arr1, arr2) {
  // input: two arrays of numbers (arr1, arr2)
  // output: boolean (true or false)

  // check length of both arrays (if not the same length, return false)
  if (arr1.length !== arr2.length) {
    return false;
  }

  // loop through first array
  for (let i = 0; i < arr1.length; i++) {
    // get the index from  array 2 where the value equals the squared value from array 1
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    // if the index is not found, return false
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// SOLUTION 2 - REFACTORED
function same2(arr1, arr2) {
  // check length of both arrays (if not the same length, return false)
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  // create objects to store frequency count
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // loop through first array
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }

  // loop through second array
  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // loop through first frequency counter
  for (let key in frequencyCounter1) {
    // if the key (squared) does not match a key in the second frequency counter, return false
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // if the value of the key (squared) in the second frequency counter does match the value of the key in the first frequency counter, then return false
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  // if valid, return true
  return true;
}

console.log(same([1,2,3,2], [9,1,4,4]));

console.log(same2([1,2,3,2], [9,1,4,4]));
console.log(same2([1,2,3,2,5], [9,1,4,4,11]));