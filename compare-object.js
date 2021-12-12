// compare between two objects, compare in referential integrity, it doesn't care whether the values and types are same looking like or not!
const first = { a: 1, b: 2 };
const second = { b: 2, a: 1 };
const third = first;

if (second === third) {
    console.log('Objects are equal!');
} else {
    console.log('Objects are not equal!');
}





// rule to make string
console.log(JSON.stringify(second));
console.log(JSON.stringify(third));



// compare between two strings which check whether the values and types are same looking like or not!
if (JSON.stringify(second) === JSON.stringify(third)) {
    console.log('Objects are equal!');
} else {
    console.log('Objects are not equal!');
}



// compare between two objects using function and condition
const comOne = { x: 4, y: 8 };
const comTwo = { y: 8, x: 4 };


function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
        return true;
    }
}

const isEqual = compareObjects(comOne, comTwo);
console.log(isEqual);