// **Radix Sort Pseudocode**
// * Define a function that accepts a list of numbers
// * Firgure out how many digits the largest number has
// * Loop from *k* = 0 up to this largest number of digits
// * For each iteration of the loop:
//   * Create buckets for each digit (0 to 9)
//   * Place each number in the corresponding bucket on its *k*th digit
// * Replace our existing array with values in our buckets, starting with 0 and going up to 9.
// * Return the list at the end.

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i],k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([23, 345, 54678, 12, 2345, 9852])); //[12, 23, 345, 2345, 9852, 54678]

// Returns the digit in *num* at the given *place* value
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Returns the number of digits in *num*.
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Given an array of numbers, this function returns the number of digits in the largest number in the the list.
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// console.log(getDigit(12345, 0)); //5
// console.log(getDigit(12345, 1)); //4
// console.log(getDigit(12345, 2)); //3
// console.log(getDigit(12345, 3)); //2
// console.log(getDigit(12345, 4)); //1
// console.log(getDigit(12345, 5)); //0

// console.log(digitCount(10)); //2
// console.log(digitCount(2)); //1
// console.log(digitCount(423)); //3

// console.log(mostDigits([1234, 56, 7]));
// console.log(mostDigits([1, 1, 11111, 1]));
// console.log(mostDigits([12, 34, 56, 78]));