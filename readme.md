# JS Data Structures & Algorithms
>Notes and code examples for learning data structures and algorithms in JavaScript.

* [Big O Notation](#big-o-notation)
* [Array and Object Performance](#array-and-object-performance)
* [Problem Solving Approach](#problem-solving-approach)
* [Problem Solving Patterns](#problem-solving-patterns)
* [Recursion](#recursion)
* [Searching Algorithms](#searching-algorithms)
* [Sorting Algorithms](#sorting-algorithms)
* [Intermediate Sorting Algorithms](#intermediate-sorting-algorithms)
* [Data Structures](#data-structures)

----
## Big O Notation

* [Overview & Importance](#overview--importance)
* [Big O Definition](#big-o-definition)
* [Big O Complexity](#big-o-complexity)
* [Simplifying Big O Expressions](#simplifying-big-o-expressions)
* [Big O Shorthands](#big-o-shorthands)
* [Test Case](#test-case)
* [More Examples](#another-example)
* [Space Complexity Examples](#space-complexity-examples)

----
### Overview & Importance

* Big O Notation is a way to formalize fuzzy counting.
* It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
* It is important to have precise vocabulary to talk about how our code performs.
* Useful for discussing trade-offs between different approaches.
* When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications.
* **Main Idea:** Imagine we have multiple implementations of the same function. How can we determine which one is the "best"?
* *What does better mean?*
  * Faster?
  * Less memory-intensive?
  * More readable?
* Performance Timer: https://rithmschool.github.io/function-timer-demo/

----
### Big O Definition

We say an algorithm is **O(f(*n*))** if the number of simple operations the computer has to do is eventually less than a constant times **f(*n*)**, as ***n*** increases.

  * f(n) could be linear (f(n) = n)
  * f(n) could be quadratic (f(n) = n<sup>2</sup>)
  * f(n) could be constant (f(n) = 1)
  * f(n) could be something entirely different

Regardless of the exact number, the number of operations grows roughly propertionally with *n*.

If *n* doubles, the number of operations with also roughly double.

----
### Big O Complexity

**Time Complexity:** how can we analyze the runtime of an algorithm as the size of the inputs increases?

**Space Complexity:** how much additional memory do we need to allocate in order to run the code in our algorithm?
* Most primitives (booleans, numbers, undefined, null) are constant space.
* Strings require O(*n*) space, where *n* is the string length.
* Reference types are generally O(*n*), where *n* is the length for arrays or the number of keys for objects.

**Auxiliary Space Complexity:** refers to space required by the algorithm, not including space taken up by the inputs.

----
### Simplifying Big O Expressions

**Constants Don't Matter**
`
  O(2*n*) => O(*n*)

  O(500) => O(1)

  O(13*n*<sup>2</sup>) => O(*n*<sup>2</sup>)
`

**Smaller Terms Don't Matter**
`
  O(*n* + 10) => O(*n*)

  O(*n* * 100) => O(*n*)

  O(1000*n* + 50) => O(*n*)

  O(*n*<sup>2</sup> + 5*n* + 8) => O(*n*<sup>2</sup>)

  O(*n*<sup>2</sup> + *n*<sup>3</sup>) => O(*n*<sup>3</sup>)

  O(*n* + *n* + *n* + *n*) => O(*n*)
`

----
### Big O Shorthands

1. Arithmetic operations are constant.
2. Variable assignment is constant.
3. Accessing elements in an array (by index) or object (by key) is constant.
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

----
### Test Case

**Example:** We want to write a function that calculates the sum of all numbers from 1 up to (and including) some number *n*.

**Solution 1:**
* Number of operations is (eventually) bounded by a multiple of *n* - **O(*n*)**.

```javascript
  function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  console.log(addUpTo(6));
```

**Measure Performance using Time - Not the most efficient**
```javascript
  function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  var t1 = performance.now();
  addUpTo(10000000);
  var t2 = performance.now();

  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
```

----
**Solution 2:**
* Always 3 operations - **O(1)**

```javascript
  function addUpTo(n) {
    return n * (n + 1) / 2;
  }

  console.log(addUpTo(4));
```

**Measure Performance using Time - Not the most efficient**
```javascript
  function addUpTo(n) {
    return n * (n + 1) / 2;
  }

  var t1 = performance.now();
  addUpTo(10000000);
  var t2 = performance.now();

  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
```

### More Examples

**Example 1**

* Number of operations (for both loops) is eventually bounded by a multiple of *n*.

```javascript
  function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n -1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

countUpAndDown(10);
```

**Example 2**

* **O(*n*)** operation inside of an **O(*n*)** operation - **O(*n*<sup>2</sup>)**

```javascript
  function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

printAllPairs(10);
```

**Example 3**

* Time complexity is **O(*n*)**

```javascript
  function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
      console.log(i);
    }
  }

  logAtLeast5(10);
```

**Example 4**

* Time complexity is **O(1)**

```javascript
  function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(7);
```

**Example 5**

* Time complexity is **O(*n*)**

```javascript
  function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
```

**Example 6**

* Time complexity is **O(*n*<sup>2</sup>)**

```javascript
  function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
  }
```

----
### Space Complexity Examples

**Example 1**

* Space complexity is **O(1)**

```javascript
  function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
```

**Example 2**

* Space complexity is **O(1)**

```javascript
  function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
  }
}
```

[Back to Top](#js-data-structures--algorithms) :arrow_up:

----
## Array and Object Performance

* [Objectives](#objectives)
* [The Big O of Objects](#the-big-o-of-objects)
* [Arrays](#arrays)

----
### Objectives

* Understand how objects and arrays wok, through the lens of Big O.
* Explain why adding elements to the beginning of an array is costly.
* Compare the contrast the runtime for arrays and objects, as well as built-in methods.

----
### The Big O of Objects

**When to use Objects**

* When you don't need order
* When you need fast access / insertion and removal

**Big O of Objects**
|  |  |
| --- | --- |
| Insertion | **O(1)** |
| Removal | **O(1)** |
| Searching | **O(*n*)** |
| Access | **O(1)** |

**Big O of Object Methods**
|  |  |
| --- | --- |
| Object.keys | **O(*n*)** |
| Object.values | **O(*n*)** |
| Object.entries | **O(*n*)** |
| hasOwnProperty | **O(1)** |

----
### Arrays

* Arrays are **Ordered Lists**

**When to use Arrays**

* When you need order
* When you need fast access / insertion and removal

**Big O of Arrays**
|  |  |
| --- | --- |
| Insertion | ***it depends...*** |
| Removal | ***it depends...*** |
| Searching | **O(*n*)** |
| Access | **O(1)** |

**Insertion & Removal** - Big O depends on where the element is inserted/removed in the array
  * Insertion at the end of array is constant - **O(1)**
  * Insertion at the beginning of array causes all indices to change (re-index) - **O(*n*)**
  * Removal at the end of array is constant - **O(1)**
  * Removal at the beginning of array causes all indices to change (re-index) - **O(*n*)**
  * push() and pop() are always more efficient than shift() and unshift()

**Big O of Array Operations**
|  |  |
| --- | --- |
| push | **O(1)** |
| pop | **O(1)** |
| shift | **O(*n*)** |
| unshift | **O(*n*)** |
| concat | **O(*n*)** |
| slice | **O(*n*)** |
| splice | **O(*n*)** |
| sort | **O(*n* * log *n*)** |
| forEach/map/filter/reduce/etc. | **O(*n*)** |


[Back to Top](#js-data-structures--algorithms) :arrow_up:

----
## Problem Solving Approach

* [Objectives & Discussion](#objectives--discussion)
* [Step 1: Understand the Problem](#step-1-understand-the-problem)
* [Step 2: Explore Concrete Examples](#step-2-explore-concrete-examples)
* [Step 3: Break It Down](#step-3-break-it-down)
* [Step 4: Solve or Simplify](#step-4-solve-or-simplify)
* [Step 5: Look Back and Refactor](#step-5-look-back-and-refactor)

----
### Objectives & Discussion

* Define what an algorithm is
* Devise a plan to solve algorithms
* Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

**An Algorithm is:** a *process* or *set of steps* to accomplish a certain task.
  * Almost everything done in programming involves some kind of algorithm.
  * It is the foundation for being a successful problem solving developer.

**Problem Solving**
  * Understand the Problem
  * Explore Concrete Examples
  * Break it Down
  * Solve/Simplify
  * Look Back and Refactor

----
### Step 1: Understand the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? Do you have enough information to solve the problem?
5. How should I label the important pieces of data that are part of the problem?

**Test Case:** Write a function which takes two numbers and returns their sum.

```javascript
  // 1. Can I restate the problem in my own words? - "implement addition"
  // 2. What are the inputs that go into the problem? - ints? floats? maybe string for large numbers?
  // 3. What are the outputs that should come from the solution to the problem? - int? float? string?
  // 4. Can the outputs be determined from the inputs? Do you have enough information to solve the problem?
  // 5. How should I label the important pieces of data that are part of the problem?

  // POSSIBLE SOLUTION
  function returnSum(num1, num2) {
  return num1 + num2;
  }
```

----
### Step 2: Explore Concrete Examples

Coming up with examples help you understand the problem better (e.x. User Stories, Unit Tests)

* Start with Simple Examples
* Progress to More Complex Examples
* Explore Examples with Empty Inputs
* Explore Examples with Invalid Inputs

**Test Case:** Write a function which takes in a string and returns counts of each character in the string.

```javascript
  charCount("aaaa") // {a:4}
  charCount("aaaa") // {a:4, b:0, c:0, d:0, e:0, etc..}
  charCount("hello") // {h:1, e:1, l:2, o:1}

  // "my phone number is 123456789"
  // "hello world"

  charCount("hello worlds") // {h:1, e:1, l:3, o:2, d:1, s:1, w:1, " ":1}
```

----
### Step 3: Break It Down

* **Explicitly write out the steps you need to take:** this forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and start coding.

```javascript
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
  function charCount(string) {
    var result = {}
    string.toLowerCase().split('').forEach(letter => {
      result.hasOwnProperty(letter) ? result[letter] += 1 : result[letter] = 1;
    });
    return result;
  }
```

----
### Step 4: Solve or Simplify

**Simplify**
  * Find the core difficulty in what you are trying to do
  * Temporarily ignore that difficulty
  * Write a simplified solution
  * Then incorporate that difficulty back in

**Solution**
```javascript
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
```

**Character Codes**
```javascript
  // Char Codes
  // (char > 47 && char < 58) - checking for numeric (0-9)
  // (char > 64 && char < 91) - checking for upper alpha (A-Z)
  // (char > 96 && char < 123) - checking for lower alpha (a-z)
```

----
### Step 5: Look Back and Refactor

**Refactoring Questions**
* Can you check the result?
* Can you derive the result differently?
* Can you understand it at a glance?
* Can you use the result or method for some other problem?
* Can you improve the performance of your solution?
* Can you think of other ways to refactor?
* How have other people solved this problem?

**Refactored Solution**
```javascript
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
```

**Different Solution to Problem**
```javascript
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
```

[Back to Top](#js-data-structures--algorithms) :arrow_up:

----
## Problem Solving Patterns

* [Different Patterns](#different-patterns)
* [Frequency Counter](#frequency-counter)
* [Multiple Pointers](#multiple-pointers)
* [Sliding Window](#sliding-window)
* [Divide and Conquer](#divide-and-conquer)

### Different Patterns

* Frequency Counter
* Multiple Pointers
* Sliding Window
* Divide and Conquer
* Dynamic Programming
* Greedy Algorithms
* Backtracking

----
### Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(*n*<sup>2</sup>) operations with arrays/strings.

**Example Case:** Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

**Solution 1: Naive Approach**
```javascript
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
```

**Solution 2: Refactored with Frequency Counter**
```javascript
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
```

**Anagram Function**: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another.

**Solution 1**
```javascript
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
    if(!(key in freqCount2)) {
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
```

**Refactored Solution**
```javascript
  function validAnagram2(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  const counter = {};

  for(let val of str1) {
    counter[val] = ++counter[val] || 1;
  }

  for(let val of str2) {
    if (!counter[val]) {
      return false;
    } else {
      counter[val] -= 1;
    }
  }
  return true;
}
```

----
### Multiple Pointers

Creating **pointers** or values that correspond to an index or position and move towards the beginning, end, or middle based on certain conditions. Very efficient for solving problems with minimal space complexity as well.

**Example Case:** Write a function called **sumZero** which accepts a **sorted** array of integers. The function should find the **first** pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

**Naive Solution**
```javascript
  // Time Complexity - 0(n^2)
  // Space Complexity - 0(1)
  function sumZeroNaive(arr) {
    for(let i = 0; i < arr.length; i++) {
      for(let j = i+1; j < arr.length; j++) {
        if(arr[i] + arr[j] === 0) {
          return [arr[i], arr[j]];
        }
      }
    }
  }
```

**Refactored Solution**
```javascript
  // Time Complexity - 0(n)
  // Space Complexity - 0(1)
  function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
      let sum = arr[left] + arr[right];
      if(sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
```

**Another Example Case:** Implement a function called which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

**Solution 1**
```javascript
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
```

**Solution 2**
```javascript
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
```

----
### Sliding Window

This pattern involves creating a **window** which can either be an array or number from one condition to another. Depending on a certain condition, the window either increases or closes (and a new window is created). This pattern is very useful for keeping track of a subset of data in an array/string etc.

**Example Case:** Write a function which accepts an array of integers and a number (**n**). The function should calculate the maximum sum of **n** consecutive elements in the array.

**Example Input/Output**
```javascript
  maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
  maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
  maxSubarraySum([4,2,1,6], 1) // 6
  maxSubarraySum([4,2,1,6,2], 4) // 13
  maxSubarraySum([], 4) // null
```

**Solution 1: Naive Approach**
```javascript
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
```

**Solution 2: Refactored**
```javascript
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

```

----
### Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity.

**Example Case:** Given a sorted array of integers, write a function that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

**Solution 1:**
```javascript
  // Linear Search
  function search(arr, val) {
    for (i of arr) {
      if (i === val)
        return arr.indexOf(i);
    }
    return -1;
  }
```

**Solution 2:**
```javascript
  // Refactored Solution - Binary Search
  function search2(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      let currentEl = arr[middle];

      if (arr[middle] < val) {
        min = middle + 1;
      }
      else if (arr[middle] > val) {
        max = middle - 1;
      }
      else {
        return middle;
      }
    }
    return -1;
  }
```

[Back to Top](#js-data-structures--algorithms) :arrow_up:

----
## Recursion

* [Objectives & Discussion](#objectives--discussion-1)
* [Recursive Examples](#recursive-examples)
* [Helper Method Recursion](#helper-method-recursion)
* [Pure Recursion](#pure-recursion)

----
### Objectives & Discussion

* Define what recursion is and how it can be used.
* Understand the two essential components of a recursive function.
* Visualize the call stack to better debug and understand recursive functions.
* Use helper method recursion and pure recursion to solve more difficult problems.

**Recursion is:** A process (a function in our case) that calls itself.

In almost all programming languages, there is a built in data structure named **call stack** that manages what happens when functions are invoked.

**The Call Stack**
* It is a **stack** data structure.
* Any time a function is invoked, it is placed (**pushed**) on top of the call stack.
* When JavaScript sees the **return** keyword or when the function ends, the compiler will remove (**pop**) from the top.

Two essential parts of a recursive function: Base Case and Different Input (the recursive call).

**Base Case**: The condition when the recursion ends.

----
### Recursive Examples

**Example 1**
```javascript
  function countDown(num) {
    if (num <= 0) {
      console.log('DONE');
      return;
    }
    console.log(num);
    num--;
    countDown(num);
  }
```

**Example 2**
```javascript
  function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
  }
```

**Example 3**
```javascript
  function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }
```

----
### Helper Method Recursion

With helper method recursion, we have two functions. We have an outer function, and then inside the outer function, we have an inner function that is recursive.

**Example Pattern**
```javascript
  function outer(input) {
    var outerScopedVariable = [];

    function helper(helperInput) {
      // recursive call of inner function
      helper(helperInput--);
    }

    // call inner function
    helper(input);

    return outerScopedVariable;
  }
```

**Example Function**
```javascript
  function collectOddValues(arr) {
    let result = [];

    function helper(input) {
      if (input.length === 0) return;

      if (input[0] % 2 !== 0) result.push(input[0]);

      helper(input.slice(1));
    }

    helper(arr);
    return result;
  }
```

----
### Pure Recursion

**Refactored Function**
```javascript
  function collectOddValues2(arr) {
    let newArr = [];

    if (arr.length === 0) return newArr;
    
    if (arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectOddValues2(arr.slice(1)));

    return newArr;
  }
```

[Back to Top](#js-data-structures--algorithms) :arrow_up:

----
## Searching Algorithms

* [Objectives & Discussion](#objectives--discussion-2)
* [Linear Search](#linear-search)
* [Binary Search](#binary-search)
* [String Search](#string-search)

----
### Objectives & Discussion

* Describe what a searching algorithm is
* Implement linear search on arrays
* Implement binary search on sorted arrays
* Implement a naive string searching algorithm
* Implement the KMP string searching algorithm

----
### Linear Search

**JavaScript Search Methods**
|  |
| --- |
| indexOf |
| includes |
| find |
| findIndex |

**Linear Search Function:** Write a function that accepts an array (of numbers) and a value (number). If an array element is equal to the value, return the index at which the element is found. If it is never found, return -1. *Do not use the indexOf method*

**Solution:**
```javascript
  function linearSearch(arr, value) {
    for (var index in arr) {
      if (arr[index] === value) return index;
    }
    return -1;
  }
```

**Linear Search Big O**
* **O(1)** - Best
* **O(n)** - Average
* **O(n)** - Worst

----
### Binary Search

* Binary search is a much faster form of search.
* Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
* Binary search only works on sorted arrays.

**Binary Search Function:** Write a function which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

**Solution:**
```javascript
  function binarySearch(arr, val) {

    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (arr[middle] !== val && left <= right) {
      if (val < arr[middle]) right = middle - 1;
      else left = middle + 1;
      
      middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === val ? middle : -1;
  }
```

**Linear Search Big O**
* **O(log n)** - Worst and Average Case
* **O(1)** - Best Case

----
### String Search

**Naive String Search Steps:**
* Loop over the longer string
* Loop over the shorter string
* If the characters do not match, break out of the inner loop
* If the characters do match, keep going
* If you complete the inner loop and find a match, increment the count of matches
* Return the count

**Solution:**
```javascript
  function stringSearch(str, substr) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < substr.length; j++) {
        if (substr[j] !== str[i+j]) break;
        if (j === substr.length - 1) count++;
      }
    }
    return count;
  }
```

[Back to Top](#js-data-structures--algorithms) :arrow_up:

----
## Sorting Algorithms

* [Introduction to Sorting](#introduction-to-sorting)
* [Built-in JavaScript Sort Method](#built-in-javascript-sort-method)
* [Bubble Sort](#bubble-sort)
* [Selection Sort](#selection-sort)
* [Insertion Sort](#insertion-sort)
* [Big O of Sorting Algorithms](#big-o-of-sorting-algorithms)

----
### Introduction to Sorting

**What is Sorting?**
* Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
* Some Examples:
  * Sorting numbers from smallest to largest
  * Sorting names alphabetically
  * Sorting movies based on release year
  * Sorting movies based on revenue

----
### Built-in JavaScript Sort Method

* The built-in sort method accepts an optional *comparator* function.
* You can use this comparator function to tell JavaScript how you want it to sort.
* The comparator looks at pairs of elements (*a* and *b*), determines their sort order based on the return value.
  * If it returns a negative number, *a* should come before *b*.
  * If it returns a positive number, *a* should come after *b*.
  * If it returns 0, *a* and *b* are the same as far as the sort is concerned.

**Example Sort Method Comparison:**
```javascript
  //Comparing Numbers
  function numCompare(num1, num2) {
    return num1 - num2;
  }

  console.log([6, 15, 4, 10].sort(numCompare)); // [4,6,10,15]
```

```javascript
  //Comparing Length of Strings
  function compareByLength(str1, str2) {
    return str1.length - str2.length;
  }

  console.log(["Zebra", "Coconut", "Apple", "Pine", "Woods"].sort(compareByLength)); //['Pine', 'Zebra', 'Apple', 'Woods', 'Coconut']
```

----
### Bubble Sort

A sorting algorithm where the largest values bubble up to the top. Before sorting, we must swap elements (e.g. swapping numbers to put them in order).

**Swapping Function:**
```javascript
  // ES5
  function swap1(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  // ES2015
  const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
```

**Bubble Sort Example:**
  * Start looping with a variable called *i* at the end of the array towards the beginning.
  * Start an inner loop with a variable called *j* from the beginning until *i - 1*.
  * If *arr[j]* is greater than *arr[j+1]*, swap those two values.
  * Return the sorted array.

```javascript
  function sort(arr) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }
    return arr;
}

console.log(sort([10,5,4,30,2])); //[2, 4, 5, 10, 30]

// Optimized Sort Function with noSwaps
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
```

----
### Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

**Selection Sort Example:**
* Store the first element as the smallest value you've seen so far.
* Compare this item to the next item in the array until you find a smaller number.
* If a smaller number is found, designate that smaller number to be the new *minimum* and continue until the end of the array.
* If the *minimum* is not the value (index) you initially began with, swap the two values.
* Repeat this with the next element until the array is sorted.

```javascript
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }
      }
    }
    return arr;
}

console.log(selectionSort([10,5,4,30,2])); //[2, 4, 5, 10, 30]
```

----
### Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted.

**Insertion Sort Example:**
* Start by picking the second element in the array.
* Compare the second element with the one before it and swap if necessary.
* Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
* Repeat until the array is sorted.

```javascript
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
```

----
### Big O of Sorting Algorithms

| Algorithm | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| --- | --- | --- | --- | --- |
| Bubble Sort | O(*n*) | O(*n*<sup>2</sup>) | O(*n*<sup>2</sup>) | O(1) |
| Insertion Sort | O(*n*) | O(*n*<sup>2</sup>) | O(*n*<sup>2</sup>) | O(1) |
| Selection Sort | O(*n*<sup>2</sup>) | O(*n*<sup>2</sup>) | O(*n*<sup>2</sup>) | O(1) |

[Back to Top](#js-data-structures--algorithms) :arrow_up:

----
## Intermediate Sorting Algorithms

* [Introduction to Faster Sorts](#introduction-to-faster-sorts)
* [Merge Sort](#merge-sort)
* [Quick Sort](#quick-sort)
* [Radix Sort](#quick-sort)

----
### Introduction to Faster Sorts

* There is a family of sorting algorithms that can improve time complexity from O(*n*<sup>2</sup>) to O(*n* log *n*).
* There is a trade off between efficiency and simplicity.
* The more efficient algorithms are much less simple, and generally take longer to understand.
* The three more efficient algorithms are: merge sort, quick sort, and radix sort.

----
### Merge Sort

* It is a combination of merging and sorting.
* Exploits the fact that arrays of 0 or 1 elements are always sorted.
* Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

* In order to implement merge sort, it's often useful to first implement a function responsible for merging two sorted arrays.
  * Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays.
  * This function should run in **O(n + m)** time and **O(n + m)** space and should not modify the parameters passed to it.

**Merging Two Sorted Arrays Pseudocode**
* Create an empty array, take a look at the smallest values in each input array.
* While there are still values we haven't looked at...
  * If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
  * If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
  * Once we exhaust one array, push in all remaining values from the other array.

**Solution Code:**

```javascript
function mergeArrays(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log(mergeArrays([1,2,3], [5,10,15,20])); //[1, 2, 3, 5, 10, 15, 20]
console.log(mergeArrays([], [1,3])); //[1, 3]
```

**Merge Sort Pseudocode**
* Break up the array into halves until you have arrays that are empty or have one element.
* Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
* Once the array has been merged back together, return the merged (and sorted) array.

**Solution Code:**

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  //call mergeArrays function defined earlier
  return mergeArrays(left, right);
}

console.log(mergeSort([10,24,76,73,72,1,9]));
```

**Big O of Merge Sort**

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| --- | --- | --- | --- |
| O(*n* log *n*) | O(*n* log *n*)  | O(*n* log *n*)  | O(*n*)  |

----
### Quick Sort

* Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted.
* Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.
* Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

**Pivot Helper**
* In order to implement quick sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.
  * Given an array, this helper function should designate an element as the pivot.
  * It should rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
  * The order of elements on either side of the pivot does not matter.
  * The helper should do this in place, that is, it should not create a new array.
  * When complete, the helper should return the index of the pivot.

**Picking a Pivot**
* The runtime of quick sort depends in part of how one selects the pivot.
* Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.

**Pivot Pseudocode**
* It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively).
* Grab the pivot from the start of the array.
* Store the current pivot index in a variable (this will keep track of where the pivot should end up).
* Loop through the array from start until end.
  * If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
* Swap the starting element (i.e. the pivot) with the pivot index.
* Return the pivot index.

**Pivot Solution Code:**
```javascript
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
```

**Quick Sort Pseudocode**
* Call the pivot helper on the array.
* When the helper function returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
* Base case occurs when you consider a subarray with less than 2 elements.

**Quick Sort Solution Code:**
```javascript
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
```

**Big O of Quick Sort**

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| --- | --- | --- | --- |
| O(*n* log *n*) | O(*n* log *n*)  | O(*n*<sup>2</sup>)  | O(log *n*)  |

----
### Radix Sort

* Radix sort is a special sorting algorithm that works on lists of numbers.
* Radix sort **never makes comparisons between elements**.
* It exploits the fact that information about the size of a number is encoded in the number of digits.
* More digits means a bigger number.

**Radix Sort Helpers**
* In order to implement radix sort, it's helpful to build a few helper functions:
  * **getDigit(*num*, *place*)** - returns the digit in *num* at the given *place* value.
  * **digitCount(*num*)** - returns the number of digits in *num*.
  * **mostDigits(*nums*)** - given an array of numbers, this function returns the number of digits in the largest number in the the list.

**Radix Helper Method Code:**
```javascript
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
```

**Radix Sort Pseudocode**
* Define a function that accepts a list of numbers
* Firgure out how many digits the largest number has
* Loop from *k* = 0 up to this largest number of digits
* For each iteration of the loop:
  * Create buckets for each digit (0 to 9)
  * Place each number in the corresponding bucket on its *k*th digit
* Replace our existing array with values in our buckets, starting with 0 and going up to 9.
* Return the list at the end.

**Radix Sort Solution Code:**
```javascript
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
```

**Big O of Radix Sort**

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| --- | --- | --- | --- |
| O(*nk*) | O(*nk*)  | O(*nk*)  | O(*n* + *k*)  |

* *n* - length of array
* *k* - number of digits (average)

[Back to Top](#js-data-structures--algorithms) :arrow_up:

----
## Data Structures

* [Introduction to Data Structures](#introduction-to-data-structures)
* [Singly Linked Lists](#singly-linked-lists)
* [Doubly Linked Lists](#doubly-linked-lists)
* [Stacks and Queues](#stacks-and-queues)
* [Trees - Binary Search Trees](#trees---binary-search-trees)
* [Tree Traversal](#tree-traversal)
* [Binary Heaps](#binary-heaps)
* [Hash Tables](#hash-tables)
* [Graphs](#graphs)

----
### Introduction to Data Structures

Data structures are collections of values, the relationshps among them, and the functions or operations that can be applied to the data.
  * **Examples include:** Binary Search Trees, Queues, Singly Linked Lists, Undirected Unweighted Graphs, Binary Heaps, Directed Graphs, Hash Tables, Doubly Linked Lists, and Stacks.

Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

**ES2015 Class Syntax**
* A class is a blueprint for creating objects with pre-defined properties or methods.
* Classes can be used to implement data structures.
* The method to create new objects must be called *constructor*.
* The class keyword creates a constant, so you can not redefine it.

**General Class Syntax**
```javascript
class DataStructure() {
  constructor() {
    //what default properties should it have?
  }
  someInstanceMethod() {
    //what should each object created from this class be able to do?
  }
}
```

* Inside all instance methods and constructor, the keyword `this` refers to the object created from that class (also known as an instance).

**Class Example Code:**
```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

**Creating Objects From Classes**
* Use the **new** keyword
```javascript
let student_one = new Student("Sidney", "Shafer");
let student_two = new Student("Jane", "Smith");
```

**Adding Instance Methods to Class**
```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  // Instance Methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return `${this.firstName} ${this.lastName} is suspended`
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a,b) {return a+b;});
    return sum/this.scores.length;
  }
}

let student_one = new Student("Sidney", "Shafer");
let student_two = new Student("Jane", "Smith");

console.log(student_one.fullName()); // Sidney Shafer
console.log(student_one.markLate()); // Sidney Shafer has been late 1 times
console.log(student_two.markLate()); // Jane Smith has been late 1 times

student_two.addScore(90);
student_two.addScore(84);
console.log(student_two.scores); // [90, 84]
console.log(student_two.calculateAverage()); // 87
```

**Adding Class Methods**
```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  // Instance Methods - call on individual instances
  // ...previous code from above
  // ...

  // Class Methods - utility methods
  static enrollStudents(...students) {
    // Do something...
    return "Enrolling students..."
  }
}

console.log(Student.enrollStudents([student_one, student_two]));
```

**Another Example of Class Methods:**
```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); //Output: 7.0710678118654755
```

**Recap**
* Classes are blueprints that when created make objects known as **instances**.
* Classes are created with the **new** keyword.
* The **constructor** function is a special function that gets run when the class is instantiated.
* Instance methods can be added to classes similar to methods in objects.
* Class methods can be added using the **static** keyword.

----
### Singly Linked Lists

**What is a Linked List?**
* A data structure that contains a **head**, **tail**, and **length** property.
* Linked Lists consist of nodes, and each node has a value and a pointer to another node or null (no indices).

**Linked Lists vs Arrays**

**Linked Lists**
* Do not have indexes.
* Elements are connected via nodes with a pointer to the next element.
* Random access is not allowed.

**Arrays**
* Indexed in order.
* Insertion and deletion can be expensive.
* Can quickly be accessed at a specific index.

**Singly Linked List Implementation**
* **Push Method Pseudocode:**
  * Function should accept a value.
  * Create a new node using the value passed to the function.
  * If there is no head property on the list, set the head and tail to be the newly created node.
  * Otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
  * Increment the length by 1.
  * Return the linked list.
* **Pop Method Pseudocode:**
  * If there are no nodes in the list, returned undefined.
  * Loop through the list until you reach the tail.
  * Set the next property of the 2nd to last node to be null.
  * Set the tail to be the 2nd to last node.
  * Decrement the length of the list by 1.
  * Return the value of the node removed.
* **Shift Method Pseudocode:**
  * If there are no nodes, return undefined.
  * Store the current head property in a variable.
  * Set the head property to be the current head's next property.
  * Decrement the length by 1.
  * Return the value of the node removed.
* **Unshift Method Pseudocode:**
  * Function should accept a value.
  * Create a new node using the value passed to the function.
  * If there is no head property on the list, set the head and tail to be the newly created node.
  * Otherwise, set the newly created node's next property to be the current property on the list.
* **Get Method Pseudocode:**
  * Function should accept an index.
  * If the index is less than zero or greater than or equal to the length of the list, return null.
  * Loop through the list until you reach the index and return the node at that specific index.
* **Set Method Pseudocode:**
  * Function should accept a value and an index.
  * Use the `get()` function defined previously to find the specific node.
  * If the node is not found, return false.
  * If the node is found, set the value of that node to be the value passed to the function and return true.
* **Insert Method Pseudocode:**
  * If the index is less than zero or greater than the length, return false.
  * If the index is the same as the length, `push()` a new node to the end of the list.
  * If the index is 0, `unshift()` a new node at the start of the list.
  * Otherwise, using the `get()` method, access the node at the *index - 1*.
  * Set the next property on that node to be the new node.
  * Set the next property on the new node to be the previous next.
  * Increment the length.
  * Return true.
* **Remove Method Pseudocode:**
  * If the index is less than zero or greater than the length, return undefined.
  * If the index is the same as the *length - 1*, `pop()` the node.
  * If the index is 0, `shift()` the node.
  * Otherwise, using the `get()` method, access the node at the *index - 1*.
  * Set the next property on that node to be the next of the next node.
  * Decrement the length.
  * Return the value of the node removed.
* **Reverse Method Pseudocode:**
  * Swap the head and tail.
  * Create a variable called next.
  * Create a variable called prev.
  * Create a variable called node and initialize it to the head property.
  * Loop through the list.
  * Set next to be the next property on whatever node is.
  * Set the next property on the node to be whatever prev is.
  * Set prev to be the value of the node variable.
  * Set the node variable to be the value of the next variable.

**Singly Linked List Solution:**
```javascript
// Create a Node Object
class Node {
  // Define a Node
  // - piece of data (val)
  // - reference to next node (next)
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create a Singly Linked List
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //PUSH METHOD: insert node at end of list
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //POP METHOD: remove the last node from list
  pop() {
    if (!this.head) return undefined;
    var curr = this.head;
    var newTail = curr;
    while(curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }
  //SHIFT METHOD: remove current head node from list and shift head to next node
  shift() {
    if (!this.head) return undefined;
    var currHead = this.head;
    this.head = currHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currHead;
  }
  //UNSHIFT METHOD: add node to beginning of list
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //GET METHOD: return an item/node at a given index
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    var counter = 0;
    var curr = this.head;
    
    while (counter != idx) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }
  //SET METHOD: change value of node based on position in list
  set(idx, val) {
    var foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  //INSERT METHOD: add a node to list at a specific position
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(idx - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  //REMOVE METHOD: remove a node from list at a specific position
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === (this.length - 1)) return this.pop();

    var prev = this.get(idx - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  //REVERSE METHOD: reverse list
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next;

    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  //PRINT METHOD: prints all values in list in order as an array
  print() {
    var arr = [];
    var curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}

//Create a new instance of Singly Linked List
var list = new SinglyLinkedList();
```

**Big 0 of Singly Linked Lists**
 
| | |
| --- | --- |
| Insertion | **O(1)**  |
| Removal | **O(1) *or* O(*n*)**  |
| Searching | **O(*n*)**  |
| Access | **O(*n*)**  |

**Summary**
* Singly linked Lists are good alternative to arrays when insertion and deletion at the beginning are frequently required.
* Arrays contain a built-in index whereas Linked Lists do not.
* The idea of a list data structure that consist of nodes is the foundation for other data structures like Stacks and Queues.

[Back to Data Structures](#data-structures) :arrow_up: | [Back to Top](#js-data-structures--algorithms) :arrow_up:

----
### Doubly Linked Lists

**Introduction**
* Doubly Linked Lists are almost identical to Singly Linked Lists, except every node has another pointer to the previous node.
* Doubly Linked Lists take more memory than Singly Linked Lists, but are more flexible.

**Doubly Linked List Pseudocode**
* **Push Method:** add a node to the end of a doubly linked list.
  * Create a new node with the value passed to the function.
  * If the head property is null, set the head and tail to be the newly created node.
  * If not, set the next property on the tail to be that node.
  * Set the previous property on the newly created node to be the tail.
  * Set the tail to be the newly created node.
  * Increment the length.
  * Return the doubly linked list.
* **Pop Method:** remove a node from the end of a doubly linked list.
  * If there is no head, return undefined.
  * Otherwise, store the current tail in a variable to return later.
  * If the length is 1, set the head and tail to be null.
  * Update the tail to be the previous node.
  * Set the new tail's next to null.
  * Decrement the length by 1.
  * Return the value removed.
* **Shift Method:** remove a node from the beginning of a doubly linked list.
  * If the length is 0, return undefined.
  * Store the current head property in a variable (call is old head).
  * If the length is 1:
    * Set the head to be null
    * Set the tail to be null
  * Update the head to be the next of the old head.
  * Set the head's prev property to null.
  * Set the old head's next to null.
  * Decrement the length by 1.
  * Return the old head.
* **Unshift Method:** add a node to the beginning of a doubly linked list.
  * Create a new node with the value passed to the function.
  * If the length is 0:
    * Set the head to be the new node
    * Set the tail to be the new node
  * Otherwise:
    * Set the prev property on the head of the list to be the new node.
    * Set the next property on the new node to be the head property.
    * Update the head to be the new node.
  * Increment the length.
  * Return the list.
* **Get Method:** access a node in a doubly linked list by its position.
  * If the index is less than 0 or greater or equal to the length, return null.
  * If the index is less than or equal to half the length of the list:
    * Loop through the list starting from the head and loop towards the middle.
    * Return the node once it is found.
  * If the index is greater than half the length of the list:
    * Loop through the list starting from the tail and loop towards the middle.
    * Return the node once it is found.
* **Set Method:** replacing the value of a node in a doubly linked list.
  * Create a variable which is the result of the `get()` method at the index passed to the function.
    * If the `get()` method returns a valid node, set the value of that node to be the value passed to the function.
    * Return true.
  * Otherwise, return false.
* **Insert Method:** add a node in a doubly linked list by a certain position.
  * If the index is less than zero or greater than the length, return false.
  * If the index is 0, `unshift()`.
  * If the index is the same as the length, `push()`.
  * Use the `get()` method to access the *index - 1*.
  * Set the next and prev properties on the correct nodes to link everything together.
  * Increment the length.
  * Return true.
* **Remove Method:** remove a node in a doubly linked list by a certain position.
  * If the index is less than zero or greater than or equal to the length, return undefined.
  * If the index is 0, `shift()`.
  * If the index is the same as the *length-1*, `pop()`.
  * Use the `get()` method to retrieve the item to be removed.
  * Update the next and prev properties to remove the found node from the list.
  * Set next and prev to null on the found node.
  * Decrement the length.
  * Return the removed node.

**Doubly Linked List Code:**
```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //PUSH METHOD: add a node to the end of a doubly linked list
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //POP METHOD: remove a node from the end of a doubly linked list
  pop() {
    if (!this.head) return undefined;
    
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  //SHIFT METHOD: remove a node from the beginning of a doubly linked list
  shift() {
    if (this.length === 0) return undefined;

    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  //UNSHIFT METHOD: add a node to the beginning of a doubly linked list
  unshift(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //GET METHOD: access a node in a doubly linked list by its position
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    var count, curr;

    if (idx <= this.length/2) {
      count = 0;
      curr = this.head;

      while (count !== idx) {
        curr = curr.next;
        count++;
      }
    } else {
      count = this.length-1;
      curr = this.tail;

      while (count !== idx) {
        curr = curr.prev;
        count--;
      }
    }
    return curr;
  }
  //SET METHOD: replacing the value of a node in a doubly linked list
  set(idx, val) {
    var foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  //INSERT METHOD: add a node in a doubly linked list by a certain position
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(idx-1);
    var afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }
  //REMOVE METHOD: remove a node in a doubly linked list by a certain position
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length-1) return this.pop();

    var removedNode = this.get(idx);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null, removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

var list = new DoublyLinkedList();
```

**Big 0 of Doubly Linked Lists**
 
| | |
| --- | --- |
| Insertion | **O(1)**  |
| Removal | **O(1)** |
| Searching | **O(*n*)**  |
| Access | **O(*n*)**  |

**Summary & Comparison**
* Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes.
* Doubly Linked Lists are better than Singly Linked Lists for finding nodes and can be done in half the time.
* Doubly Linked Lists do however, take up more memory considering the extra pointer.

[Back to Data Structures](#data-structures) :arrow_up: | [Back to Top](#js-data-structures--algorithms) :arrow_up:

----
### Stacks and Queues

**Stack Introduction**
* A **LIFO (Last In, First Out)** data structure.
* The last element added to the stack will be the first element removed from the stack.
* Stacks are used:
  * Managing function invocations
  * Undo/Redo functionality
  * Routing (the history object)

**Stack Implementation Using an Array**
* Use an array to create a stack.
* Use `push()` and `pop()` so last item added is the first removed.
* Or, use `unshift()` and `shift()` so last item added is the first removed.

```javascript
var stack = [];

stack.push("google");
stack.push("instagram");
stack.push("youtube");

// console.log(stack.pop());
stack.unshift("amazon");

console.log(stack.shift());
console.log(stack);
```

**Stack Class Method Pseudocode**
* **Push Method:** add an item to the beginning of the stack.
  * The function should accept a value.
  * Create a new node with that value.
  * If there are no nodes in the stack, set the first and last property to be the newly created node.
  * If there is at least one node, create a variable that stores the current first property on the stack.
  * Reset the first property to be the newly created node.
  * Set the next property on the node to be the previously created variable.
  * Increment the size of the stack by 1.
  * Return the size.
* **Pop Method:** remove an item at the beginning of the stack.
  * If there are no nodes in the stack, return null.
  * Create a temporary variable to store the first item on the stack.
  * If there is only 1 node, set the first and last property to be null.
  * If there is more than one node, set the first property to be the next property on the current first.
  * Decrement the size by 1.
  * Return the value of the node removed.

**Stack Implementation Code:**
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //PUSH METHOD: add an item to the beginning of the stack
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  //POP METHOD: remove an item at the beginning of the stack
  pop() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
    }
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();
```

**Big 0 of Stacks**
 
| | |
| --- | --- |
| Insertion | **O(1)**  |
| Removal | **O(1)** |
| Searching | **O(*n*)**  |
| Access | **O(*n*)**  |

[Back to Data Structures](#data-structures) :arrow_up: | [Back to Top](#js-data-structures--algorithms) :arrow_up:

----

**Queues Introduction**
* A data stucture for adding and removing data.
* Queues are a **FIFO (First In, First Out)** data structure.
* Queues are used in:
  * Background tasks
  * Uploading resources
  * Printing/task processing

**Queue Implementation Using an Array**
* Use an array to create a queue.
* Use `push()` and `shift()` so first item added is the first removed.
* Or, use `unshift()` and `pop()` so first item added is the first removed.
```javascript
//Building a Queue with an array
var q = [];

q.push("ONE");
q.push("TWO");
q.push("THREE");

console.log(q);
console.log(q.shift()); //Output: ONE
console.log(q.shift()); //Output: TWO
console.log(q.shift()); //Output: THREE

//ANOTHER SOLUTION: you could combine unshift() and pop()
```

**Queue Class Method Pseudocode**
* **Enqueue Method:** add an item to the end of a queue.
  * This function accepts some value.
  * Create a new node using that value passed to the function.
  * If there is no nodes in the queue, set this node to be the first and last property of the queue.
  * Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node.
  * Increment the size of the queue by 1.
  * Return the size.
* **Dequeue Method:** remove an item from the beginning of the queue.
  * If there is no first property, return null.
  * Store the first property in a variable.
  * See if the first is the same as the last (check if there is only 1 node).
    * If so, set the first and last nodes to be null.
  * If there is more than 1 node, set the first property to be the next property of first.
  * Decrement the size by 1.
  * Return the value of the node removed.

**Queue Implementation Code:**
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //ENQUEUE METHOD: add an item to the end of a queue
  enqueue(val) {
    var newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode
    }
    return ++this.size;
  }
  //DEQUEUE METHOD: remove an item from the beginning of the queue
  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var q = new Queue();
```

**Big 0 of Queues**
 
| | |
| --- | --- |
| Insertion | **O(1)**  |
| Removal | **O(1)** |
| Searching | **O(*n*)**  |
| Access | **O(*n*)**  |

[Back to Data Structures](#data-structures) :arrow_up: | [Back to Top](#js-data-structures--algorithms) :arrow_up:

----
### Trees - Binary Search Trees

**What is a Tree?**
* A tree is a type of data structure that consists of nodes in a parent/child relationship.
* Lists (talked about earlier) are linear.
* Trees are **nonlinear**.

**Tree Terminology**
* **Root** - the top node in a tree.
* **Child** - a node directly connected to another node when moving away from the *root*.
* **Parent** - the converse notion of a child.
* **Siblings** - a group of nodes with the same parent.
* **Leaf** - a node with no children.
* **Edge** - the connection between one node and another.

**Uses For Trees**
* HTML DOM
* Network Routing
* Abstract Syntax Tree
* Artificial Intelligence
* Folder Structure in Operating System
* Computer File Systems

**Kinds of Trees**
* Trees
* Binary Trees
* Binary Search Trees

**How Binary Search Trees Work**
* Every parent node has at most two children.
* Every node to the left of a parent node is always less than the parent.
* Every node to the right of a parent node is always greater than the parent.

**Binary Search Tree Class Code:**
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //INSERT METHOD: inserting a node into a binary search tree
  insert(value) {
    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;

      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  //FIND METHOD: finding a node in a binary search tree
  find(value) {
    if (this.root === null) return false;

    var current = this.root, found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

var tree = new BinarySearchTree();
```

**Big O of Binary Search Trees**

| | |
| --- | --- |
| Insertion | **O(log *n*)**  |
| Searching | **O(log *n*)**  |

[Back to Data Structures](#data-structures) :arrow_up: | [Back to Top](#js-data-structures--algorithms) :arrow_up:

----
### Tree Traversal

**Approaches to Traversing a Tree**
* Breadth-first Search (BFS)
* Depth-first Search (DFS)

**BFS - Steps**
* Create a queue (or an array) and a variable to store the values of the nodes visited.
* Place the root node in the queue.
* Loop as long as there is anything in the queue.
  * Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
  * If there is a left property on the node dequeued - add it to the queue.
  * If there is a right property on the node dequeued - add it to the queue.
* Return the variable that stores the values.

**DFS - PreOrder Steps**
* Create a variable to store the values of nodes visited.
* Store the root of the BST in a variable called current.
* Write a helper function which accepts a node.
  * Push the value of the node to the variable that stores the values.
  * If th node has a left property, call the helper function with the left property on the node.
  * If the node has a right property, call the helper function with the right property on the node.
* Invoke the helper function with the current variable.
* Return the array of values.

**DFS - PostOrder Steps**
* Create a variable to store the values of nodes visited.
* Store the root of the BST in a variable called current.
* Write a helper function which accepts a node.
  * If the node has a left property, call the helper function with the left property on the node.
  * If the node has a right property, call the helper function with the right property on the node.
  * Push the value of the node to the variable that stores the values.
* Invoke the helper function with the current variable.
* Return the array of values.

**DFS - InOrder Steps**
* Create a variable to store the values of nodes visited.
* Store the root of the BST in a variable called current.
* Write a helper function which accepts a node.
  * If the node has a left property, call the helper function with the left property on the node.
  * Push the value of the node to the variable that stores the values.
  * If the node has a right property, call the helper function with the right property on the node.
* Invoke the helper function with the current variable.
* Return the array of values.

**Comparing BFS & DFS**
* Keeping track of nodes (Space Complexity - depends on the tree)
  * Breadth First - lots of nodes to keep track of
  * Depth First - fewer nodes to keep track of
* Time Complexity - the same for BFS and DFS
* DFS - InOrder is most commonly used with BST's
  * Returns all nodes in the tree in their underlying order
* DFS - PreOrder can be used to "export" a tree structure so that it is easily reconstructed or copied.

**Summary & Recap**
* Trees are non-linear data structures that contain a root and child nodes.
* Binary Trees can have values of any type, but at most two children for each parent.
* Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater.
* We can search through Trees using BFS and DFS.

[Back to Data Structures](#data-structures) :arrow_up: | [Back to Top](#js-data-structures--algorithms) :arrow_up:

----

### Binary Heaps

**What is a Binary Heap?**
* Very similar to binary search tree.
* In a **Max Binary Heap**, parent nodes are always larger than child nodes.
* In a **Min Binary Heap**, parent nodes are always smaller than childe nodes.

**Max Binary Heap**
* Each parent has at most two child nodes.
* The value of each parent node is always greater than its child nodes.
* In a Max Binary Heap, the parent is greater than the children, but there are no guarantees between sibling nodes.
* A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

Binary Heaps are used to implement **priority queues**, which are commonly used data strcutures. They are also used with **graph traversal** algorithms.

**Storing a (max) Binary Heap using an Array**
* For any index of an array `n`...
  * The left child is stored at `2n + 1`
  * The right child is at `2n + 2`
* For any child node at index `n`...
  * It's parent is at index `(n-1) / 2` *floored*

**Max Binary Heap Pseudocode**
* **Insert Method:**
  * Push the value into the values property on the heap.
  * Bubble up:
    * Create a variable called *index* which is the length of the values property minus 1.
    * Create a variable called *parentIndex* which is the floor of `(index - 1) / 2`.
    * Keep looping as long as the values element at the *parentIndex* is less than the values element at the child index.
      * Swap the value of the values element at the *parentIndex* with the value of the element property at the child index.
      * Set the index to be the *parentIndex* and start over.
* **Extract Max Method:**
  * Swap the first value in the values property with the last one.
  * Pop from the values property (so you can return the value at the end).
  * Have the new root "sink down" to the correct spot...
    * Your parent index starts at 0 (the root)
    * Find the index of the left child: `2 * index + 1`
    * Find the index of the right child: `2 * index + 2`
    * If the left or right child is greater than the element, swap them.
    * If both left and right children are larger, swap with the largest child.
    * The child index you swapped to now becomes the new parent index.
    * Keep looping and swapping until neither child is larger than the element.
    * Return the old root.

**Max Binary Heap Solution**
```javascript
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const current = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];

            if (current <= parent) break;

            this.values[parentIdx] = current;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
```

**Priority Queue**
**What is a Priority Queue?**
  * A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

**Priority Queue Pseudocode**
* Write a *Min Binary Heap* - lower number means higher priority.
* Each node has a `val` and `priority`. Use the priority to help build the heap.
* **Enqueue** method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
* **Dequeue** method removes root element, returns it, and rearranges heap using priority.

**Priority Queue Solution**
```javascript
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];

            if (element.priority >= parent.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let q = new PriorityQueue();

q.enqueue("common cold", 5);
q.enqueue("gunshot wound", 1);
q.enqueue("high fever", 4);
q.enqueue("broken arm", 2);
q.enqueue("glass wound", 3);

console.log(q);
```

**Big O of Binary Heaps**

| | |
| --- | --- |
| Insertion | **O(log *n*)**  |
| Removal | **O(log *n*)**  |
| Searching | **O(*n*)**  |

**Summary**
* Binary Heaps are usefult data structures for sorting, and implementing other data structures like priority queues.
* Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children.
* We can represent heaps using arrays.

[Back to Data Structures](#data-structures) :arrow_up: | [Back to Top](#js-data-structures--algorithms) :arrow_up:

----
### Hash Tables

**What are Hash Tables?**
* Hash tables are used to store *key-value* pairs.
* They are like arrays, but the keys are not ordered.
* Unlike arrays, hash tables are *fast* for all of the following operations: finding values, adding new values, and removing values.
* Hash Table Examples:
  * Python has **dictionaries**
  * JavaScript has **objects** and **maps**
  * Java, Go, and Scala have **maps**
  * Ruby has **hashes**

**Hash Table Implementation**
This example uses an *array* to implement a hash table.

In order to look up values by key, we need a way to *convert keys into valid array indices*. A function that performs this task is called a *hash function*.

**Hash Function That Works on Strings**
```javascript
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}
```

**Improved Hash Function (with primary number)**
* A prime number in the hash is helpful in spreading out the keys more uniformly.
* It is also helpful if the array that you're putting values into has a prime length.
```javascript
function hash(key, arrayLen) {
    let total = 0;
    let DUMMY_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * DUMMY_PRIME + value) % arrayLen;
    }
    return total;
}
```

**Dealing with Collisions**
* Collitions are inevitable. There are many strategies for dealing with collisions, for example:
  * Separate Chaining
  * Linear Probing

**Separate Chaining**
* With *separate chaining*, at each index in the array, we store values using a more sophisticated data structure (e.g. an array or linked list).
  * This allows storage of multiple key-value pairs at the same index.

**Linear Probing**
* With *linear probing*, when a collision is found, we search through the array to find the next empty slot.
  * This allows storage of a single key-value pair at each index.

**Big O of Hash Tables**
| | |
| --- | --- |
| Insertion | **O(1)**  |
| Removal | **O(1)**  |
| Access | **O(1)**  |

**Summary of Hash Tables**
* Hash tables are collections of key-value pairs.
* Hash tables can find values quickly given a key.
* Hash tables can add new key-values quickly.
* Hash tables store data in a large array, and work by *hashing* the keys.
* A good hash should be fast, distribute keys uniformly, and be deterministic.
* Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index.

[Back to Data Structures](#data-structures) :arrow_up: | [Back to Top](#js-data-structures--algorithms) :arrow_up:

----

### Graphs

A **graph data structure** consists of a finit (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

**Uses for Graphs**
* Social Networks
* Location / Mapping
* Routing Algorithms
* Visual Hierarchy
* File System Optimizations

**Graph Terminology**
* **Vertex** - a node
* **Edge** - a connection between nodes
* **Weighted/Unweighted** - values assigned to distances between vertices.
* **Directed/Undirected** - directions assigned to distances between vertices.

**Adjacency List**
* Can take up less space (in sparse graphs)
* Faster to iterate over all edges
* Can be slower to lookup specific edge

**Adjacency Matrix**
* Takes up more space (in sparse graphs)
* Slower to iterate over all edges
* Faster to lookup specific edge

**Adjacency List Graph Pseudocode**
* **Adding a Vertex**
  * Write a method called `addVertex`, which accepts a name of a vertex.
  * It should add a key to the adjacency list with the name of the vertex and set its value to be ab empty array.
* **Adding an Edge**
  * This function should accept two vertices, we can call them `vertex1` and `vertex2`.
  * This function should find in the adjacency list the key of `vertex1` and push `vertex2` to the array.
  * The function should find in the adjacency list the key of `vertex2` and push `vertex1` to the array.
* **Removing an Edge**
  * This function should accept two vertices, `vertex1` and `vertex2`.
  * The function should reassign the key of `vertex1` to be an array that does not contain `vertex2`.
  * The function should reassign the key of `vertex2` to be an array that does not contain `vertex1`.
* **Removing a Vertex**
  * The function should accept a vertex to remove
  * The function should loop as long as there are any other vertices in the adjacency list for that vertex.
  * Inside of the loop, call our `removeEdge()` method with the vertex we are removing and any values in the adjacency list for that vertex.
  * Delete the key in the adjacency list for that vertex.

**Adjacency List Graph Solution**
```javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

var g = new Graph();
```

[Back to Data Structures](#data-structures) :arrow_up: | [Back to Top](#js-data-structures--algorithms) :arrow_up:

----
