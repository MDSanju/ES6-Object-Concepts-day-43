// object method
const sanju = {
    id: 101,
    name: 'MD Sanju',
    bucks: 5000,
    treatBill: function(costs, tips, tax) {
        this.bucks = this.bucks - costs - tips - tax;
        console.log('codes provided from here!', this);
        return this.bucks;
    }
}

// another one
const kayel = {
    id: 102,
    name: 'Trout and Coffee',
    bucks: 6000,
}

// it will work for more at the same time, Ex.
const john = {
    id: 103,
    name: 'John',
    bucks: 8000
}

// we can call the method for each object together, that will work for both one at the same time perfectly
// sanju.treatBill(100);
// bind kayel here it is
const bindingTwo = sanju.treatBill.bind(kayel);
// bind john
const bindThree = sanju.treatBill.bind(john);
// bindingTwo(500);
// bindingTwo(50);

// bindThree(2000);





// alternative way of using .bind()
// sanju.treatBill.call(kayel, 500, 20, 30);
// sanju.treatBill.call(john, 1200, 100, 80);
// sanju.treatBill.call(kayel, 150, 10, 15);





// this is another alternative way to do it
sanju.treatBill.apply(john, [3000, 300, 100]);