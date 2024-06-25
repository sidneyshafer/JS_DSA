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