// nested object
const student = {
    id: 101,
    name: 'MD Sanju',
    major: 'javascript',
    isGood: false,
    sub: ['vanilla js', 'react', 'node js', 'next js'],
    classMate: {
        name: 'kamran',
        major: 'javascript'
    },
    takeExam: function() {
        console.log(this.classMate.name, 'have been writing exam.');
    }
}

// function calling system
student.takeExam();


// another one Ex.
const friends = {
    bucks: 5000,
    treatBill: function(costs, treat) {
        this.bucks = this.bucks - costs - treat;
        return this.bucks;
    }
}

// call treatBill function system
const remaining = friends.treatBill(900, 50);
const remaining2 = friends.treatBill(500, 30);
console.log(remaining);
console.log(remaining2);