//* Start looping with a variable called *i* at the end of the array towards the beginning.
//* Start an inner loop with a variable called *j* from the beginning until *i - 1*.
//* If *arr[j]* is greater than *arr[j+1]*, swap those two values.
//* Return the sorted array.

function sort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(sort([10,5,4,30,2])); //[2, 4, 5, 10, 30]

// function sort2(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j+1]) {
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//   }
//   return arr;
// }

// console.log(sort2([10,5,4,30,2]));
