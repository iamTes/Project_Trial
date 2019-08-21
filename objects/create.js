// Using the Object.create method to create an object
var create = {
    calculateAge: function () {
        const now = new Date().getFullYear();
        const age = now - this.yearOfBirth;
        console.log(`${this.name} is ${age} years old. And is employeed as a ${this.job}`);
    },
    fullName: function (lastName) {
        console.log(`${this.name} ${lastName}`);
    }
}

const John = Object.create(create);
John.name = 'John';
John.yearOfBirth = 1990;
John.job = 'Teacher';

console.log(John.name);
John.calculateAge();
John.fullName('Drogba');

const Jane = Object.create(create);
Jane.name = 'Jane';
Jane.yearOfBirth = 2000;
Jane.job = 'Designer';

console.log(Jane.name);
Jane.calculateAge();
Jane.fullName('Martha');