// Inheritance through prototype
function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    const now = new Date().getFullYear();
    const age = now - this.yearOfBirth;
    console.log(`${this.name} is ${age} years old. And he is employeed as ${this.job}`);
}
Person.prototype.fullName = function (lastName) {
    console.log(`${this.name} ${lastName}`);
}

let John = new Person('John', 1990, 'Software Engineer');
console.log(John);
John.calculateAge();
John.fullName('Smith');