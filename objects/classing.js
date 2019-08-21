// Inheritance through object classes in ES6
class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        const now = new Date().getFullYear();
        const age = now - this.yearOfBirth;
        console.log(`${this.name} is ${age} years old. And he is employeed as ${this.job}`);
    }

    fullName(lastName) {
        console.log(`${this.name} ${lastName}`);
    }
}

class Girl extends Person {
    constructor(name, yearOfBirth, job, beauty) {
        super(name, yearOfBirth, job);
        this.beauty = beauty;
    }
    reality() {
        console.log(`${this.name} is really ${this.beauty}`);
    }
}



let Jane = new Person('Jane', 1972, 'Designer');
console.log(Jane);
Jane.calculateAge();
Jane.fullName('Anthony');

let Angel = new Girl('Angel', 2000, 'Lover', 'beautiful');
console.log(Angel);
Angel.reality();