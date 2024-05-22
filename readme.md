# JS Data Structures & Algorithms

* [Big O Notation](#big-o-notation)
* [Array and Object Performance](#array-and-object-performance)
* [Problem Solving Approach](#problem-solving-approach)

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

----