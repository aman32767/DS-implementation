class student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.late = 0;
    this.scores = [];
  }
  fullName() {
    return ` ${this.firstName} ${this.lastName} `;
  }
  markLate() {
    this.late += 1;
    if (this.late >= 3) {
      return `you are expeled ${this.firstName}`;
    }
    return `late ${this.late} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  average()
  {
      
  }
}
var firstStudent = new student("aman", "sharma");
var secondStudent = new student("cott", "stel");
secondStudent.markLate();
secondStudent.addScore(1);
secondStudent.addScore(10);
console.log(secondStudent.addScore(100));

