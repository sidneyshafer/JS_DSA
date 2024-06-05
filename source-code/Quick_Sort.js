// **Pivot Pseudocode**
// * It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively).
// * Grab the pivot from the start of the array.
// * Store the current pivot index in a variable (this will keep track of where the pivot should end up).
// * Loop through the array from start until end.
//   * If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
// * Swap the starting element (i.e. the pivot) with the pivot index.
// * Return the pivot index.

function pivot(arr, start=0, end=arr.length-1) {

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivot([5,2,1,8,4,7,6,3])); //4
console.log(pivot([4,8,2,1,5,7,6,3])); //3

function quickSort(arr, left=0, right=arr.length-1) {
  if (left < right) {
    //call pivot function defined earlier
    let pivotIndex = pivot(arr, left, right);
    //left side
    quickSort(arr, left, pivotIndex-1);
    //right side
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}

console.log(quickSort([4,6,9,1,2,5,3]));