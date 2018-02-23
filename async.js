// a simple implentation
function listPeople(){
    console.log('wes')
    console.log('matt')
    console.log('stew')
}

// listPeople();
// 'wes'
// 'matt'
// 'stew'

// with generators:

function* listPeopleGenerator() { // 1. add *
    yield 'Wes'; // will return this 1st time is invoked
    yield 'matt'; // 2nd invokation
    yield 'stew'; // 3rd ...
}

let people = listPeopleGenerator(); // returns an object with generator status
console.log(people.next() ) // { value: 'Wes', done: false } 
console.log(people.next() ) // { value: 'matt', done: false } 
console.log(people.next() ) // { value: 'stew', done: false } 
console.log(people.next() ) // { value: 'undefined', done: true } 



function* counter() {
    let i = 0; // scoped to function
    console.log('first')
    yield i;
    console.log('second')
    i++;
    yield i;
    // each next() it starts from the predessessing yield
    i++;
    yield i;
}

let count = counter()
console.log(count.next()) // { value: 0, done: false }
console.log(count.next()) // { value: 1, done: false }
console.log(count.next()) // { value: 2, done: false }

const array = [
    { name: "Wes"},
    { name: "Matt"},
    { name: "Stew"}
]

function* loop(arr) {
    for(const item of arr){
        yield item;
    }
}

const names = loop(array);

console.log(names.next()) // { value: { name: 'Wes' }, done: false }
console.log(names.next()) // { value: { name: 'Wes' }, done: false }