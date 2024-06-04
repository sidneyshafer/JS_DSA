//* Start by picking the second element in the array.
//* Compare the second element with the one before it and swap if necessary.
//* Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
//* Repeat until the array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    arr[index] = currVal;
  }
  return arr;
}

console.log(insertionSort([10,5,4,30,2])); //[2, 4, 5, 10, 30]

console.log(insertionSort([34,22,10,19,17])); //[10, 17, 19, 22, 34]