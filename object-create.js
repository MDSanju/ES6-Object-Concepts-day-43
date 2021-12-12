// 1. using object literal
const student = { name: 'MD Sanju', job: 'Web Developer' };

// 2. constructor object
const person = new Object();
console.log(person);

// 3. another way to create an object
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);

// 4. js class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p = new People('Mankind', 25);
console.log(p);

// 5. get object using function[people use it on old time before es6 coming]
function Me(name, age) {
    this.name = name;
    this.age = age;
}
const m = new Me('MD Sanju', 25);
console.log(m);