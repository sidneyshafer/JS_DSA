# JS Data Structures & Algorithms

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

----