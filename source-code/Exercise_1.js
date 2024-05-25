// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
  //input: two integers (num1, num2)
  //output: boolean value (true or false)

  let total1 = [...num1 + ''].map(n => + n).reduce((prev, cur) => prev + cur, 0);
  let total2 = [...num2 + ''].map(n => + n).reduce((prev, cur) => prev + cur, 0);

  return total1 == total2;
}

console.log(sameFrequency(123, 12));
console.log(sameFrequency(123, 123));
console.log(sameFrequency(132, 321));
console.log(sameFrequency(0, 0));