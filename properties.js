const book = {
    name: 'Hamlet',
    author: 'William Shakespeare',
    price: 299,
    isGood: true
};

// getting all property names of the object
const getKeys = Object.keys(book);
console.log(getKeys);


// getting all values of the object
const values = Object.values(book);
console.log(values);


// getting properties and values both in two dimensional array
const pairs = Object.entries(book);
console.log(pairs);



// to stop delete, use this
Object.seal(book);
// but we can change values after using seal
book.price = 199;
// try to set a new property after using seal but it doesn't work. just example
book.pages = 512;
// delete object property with value permanently
delete book.isGood;
console.log(book);


// new object to practice freeze
const bottle = {
    color: 'silver',
    height: 16,
    isClean: true
};

// use freeze because it's similar the seal
Object.freeze(bottle);

// change value, but dosen't work
bottle.height = 20;
// set new but it also dosen't work
bottle.price = 100;
// try to del but not work
delete bottle.color;
console.log(bottle);