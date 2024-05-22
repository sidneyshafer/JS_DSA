//==================================================================================================
// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another.
//==================================================================================================

//Example Output
validAnagram(' ', ' ') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'ramanag') // true
validAnagram('rat', 'car') // false
validAnagram('rat', 'art') // true
validAnagram('awesome', 'aweso') // false

function validAnagram(str1, str2) {
  // convert strings to arrays
  let arr1 = str1.toLowerCase().split('');
  let arr2 = str2.toLowerCase().split('');

  // create frequency variables
  let freqCount1 = {};
  let freqCount2 = {};

  // check length of both arrays
  if(arr1.length !== arr2.length) {
    return false;
  }

  // loop through first array
  for(let val of arr1) {
    // add a key (which represents each unique character) where the value is number of frequency in array
    freqCount1[val] = ++freqCount1[val] || 1;
  }

  // loop through second array
  for(let val of arr2) {
    // add a key (which represents each unique character) where the value is number of frequency in array
    freqCount2[val] = ++freqCount2[val] || 1;
  }

  // loop through freqCount1 object
  for(let key in freqCount1) {
    // if the key in freqCount1 is not in freqCount2, return false
    if(!key in freqCount2) {
      return false;
    }
    // if the value in freqCount1 is not the same as the value in freqCount2, return false
    if(freqCount2[key] !== freqCount1[key]) {
      return false;
    }
  }
  // if valid, return true
  return true;
}

console.log(validAnagram(' ', ' '));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'ramanag'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('rat', 'art'));