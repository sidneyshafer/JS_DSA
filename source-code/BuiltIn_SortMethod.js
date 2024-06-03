//Comparing Numbers
function numCompare(num1, num2) {
  return num1 - num2;
}

console.log([6, 15, 4, 10].sort(numCompare)); // [4,6,10,15]

//Comparing Length of Strings
function compareByLength(str1, str2) {
  return str1.length - str2.length;
}

console.log(["Zebra", "Coconut", "Apple", "Pine", "Woods"].sort(compareByLength)); //['Pine', 'Zebra', 'Apple', 'Woods', 'Coconut']