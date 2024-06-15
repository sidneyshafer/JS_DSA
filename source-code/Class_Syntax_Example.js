//Example ES2015 Class Syntax
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

  // Class Methods - utility methods
  static enrollStudents(...students) {
    // Do something...
    return "Enrolling students..."
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

console.log(Student.enrollStudents([student_one, student_two]));