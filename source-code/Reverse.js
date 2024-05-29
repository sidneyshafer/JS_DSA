// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// Non Recursive Solution
function reverse(str) {
  return str.toLowerCase().split('').reverse().join('');
}

console.log(reverse('awesome'));
console.log(reverse('school'));

function reverse2(str) {
  if (str.length <= 1) return str;
  return reverse2(str.slice(1)) + str[0];
}

console.log(reverse2('awesome'));
console.log(reverse2('school'));