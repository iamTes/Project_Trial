// Using the object literal to create an object
var obj = {
    name: 'Tesluach Lul',
    job: 'Software Engineer',
    yearOfBirth: 1996,
    schools: {
        primary: 'Namirembe Hill Primary School',
        secondary: ['Makerere College', 'Exodus College School']
    },
    calculageAge: function () {
        const now = new Date().getFullYear();
        const age = now - this.yearOfBirth;
        console.log(`${this.name} is ${age} years old.`);
    }

}
console.log(obj.schools.secondary[0]);
obj.calculageAge();