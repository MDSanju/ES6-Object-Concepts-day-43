const book = {
    name: 'Hamlet',
    author: 'William Shakespeare',
    price: 299,
    isGood: true
};

// these two kinds of for loop definitions & using system

// this loop is used for array
// for (const number of numbers) {

// }



// this loop is used for object
// for (const roll in student) {

// }






// use a for in loop
for (const all in book) {

    // this is to get all properties keys only [without values]
    // console.log(all);

    // this is to get all values only [without properties]
    // console.log(book[all]);

    // this rule is used to get all properties and values together
    // console.log(all, book[all]);
}


// new object declared
const coffee = {
    brand: 'Black Coffee',
    company: 'Nescafe',
    costs: 995,
    isInsane: true
};

// another way to get properties and values together
const keys = Object.keys(coffee);
// to get only properties making an array
// console.log(keys);

// after making an array, use for of loop on it this time to get all things together
for (const key of keys) {
    console.log(key, coffee[key]);
}


// advanced
for (const [key, value] of Object.entries(coffee)) {
    console.log(key, value);
}