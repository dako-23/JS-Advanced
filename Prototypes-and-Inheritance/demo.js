const person = {
    name: 'Peter',
    age: 18
}

//Object.defineProperty(); - може да се промени и само едно няма нужда да се пишате всички. За да хвърли грешка - 'use strict'

console.log(Object.defineProperty(person, 'name', {
    value: 'Peter',
    writable: false,
    enumerable: false,
    configurable: false
}));
