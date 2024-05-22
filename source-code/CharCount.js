// ============================================================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ============================================================================================

function charCount(string) {
  // Method that returns an object with keys that are lowercase alphanumeric characters in the string
  // - values should be the counts for those characters

  // create object to return at end

  // loop over string for each char
    // if char is a number/letter AND key in object, add one to count
    // if char is a number/letter AND not in object, add it to object and set value to one
    // if char is something else (space, period, etc.) don't do anything

  // return object at end
}


// POSSIBLE SOLUTION
// return an object with keys that are lowrcase characters in the string
function charCount(string) {
  // 1. create a new object to return
  var result = {}
  // 2. convert string to lowercase
  // 3. split string into array at each letter
  // 4. loop over the string using a forEach loop
    string.toLowerCase().split('').forEach(letter => {
      // 5. store the result in the object
      result.hasOwnProperty(letter) ? result[letter] += 1 : result[letter] = 1;
    });
    // 6. return object
    return result;
}

// SOLUTION - 1
// Method that returns an object with keys that are lowercase alphanumeric characters in the string
// - values should be the counts for those characters
function charCount2(string) {
  // 1. create a new object to return
  var result = {};

  // 2. loop over each char in string
  for (var i = 0; i < string.length; i++) {
    // 3. store current char in variable - convert to lowercase
    var char = string[i].toLowerCase();
    // 4. get char code and store in variable
    var charCode = char.charCodeAt(0);

    // 5. check if char is an alphanumeric character
    if ((charCode > 47 && charCode < 58) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      // 6. if char is alphanumeric,
        // check to see if it is already in object
        // if char already exists, increment count by 1
        // else, add the char to object and set value to 1
      result[char] > 0 ? result[char]++ : result[char] = 1;
    }
  }
  // 7. return result object
  return result;
}

// Char Codes
  // (char > 47 && char < 58) - checking for numeric (0-9)
  // (char > 64 && char < 91) - checking for upper alpha (A-Z)
  // (char > 96 && char < 123) - checking for lower alpha (a-z)

// REFACTORED SOLUTION
function charCount3(string) {
  var result = {};
  string.toLowerCase().split('').forEach((char) => {
    charCode = char.charCodeAt(0);

    if ((charCode > 47 && charCode < 58) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      result[char] > 0 ? result[char]++ : result[char] = 1;
    }
  });
  return result;
}

// DIFFERENT SOLUTION
// - using regex expressions
function charCount4(string) {
  let result = {};

  string.toLowerCase().split('').forEach((char) => {
    if (/[a-z0-9]/.test(char)) {
       result[char] = ++result[char] || 1;
      }
  });
  return result;
}

console.log(charCount("hello"));
console.log(charCount("my phone number is 123456789"));
console.log(charCount("HELLO world"));
console.log("\n");

console.log(charCount("hello"));
console.log(charCount2("my phone number is 123456789!!!"));
console.log(charCount2("HELLO world"));
console.log("\n");

console.log(charCount3("hello"));
console.log(charCount3("my phone number is 123456789"));
console.log(charCount3("HELLO world"));
console.log("\n");

console.log(charCount4("hello"));
console.log(charCount4("my phone number is 123456789"));
console.log(charCount4("HELLO world"));
console.log("\n");