// Write a function which accepts an array of integers and a number (n). The function should calculate the maximum sum of n consecutive elements in the array.

//Example Output
// maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
// maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
// maxSubarraySum([4,2,1,6], 1) // 6
// maxSubarraySum([4,2,1,6,2], 4) // 13
// maxSubarraySum([], 4) // null

// NAIVE APPROACH
  // Time Complexity - O(n^2)
  // Input: an array (arr) and number of digits to sum together (num)
function maxSubarraySum(arr, num) {
  // if number is bigger than array, return null
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    //console.log(temp, max);
  }
  return max;
}

//console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));

// REFACTORED SOLUTION
  // - with "sliding window" approach
  // Time Complexity - O(n)
function maxSubarraySum2(arr, num) {
  let maxSum = 0
  let tempSum = 0;

  // return null if array length is smaller than number
  if (arr.length < num) return null;

  // sum together the first "num" digits
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum2([1,2,5,2,8,1,5], 2));