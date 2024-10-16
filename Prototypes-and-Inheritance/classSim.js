class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName

    }

    sayHello() {

        console.log(`${this.firstName} says hello`);

    }

}

class Employee extends Person {
    constructor(firstName, lastName, position) {
        super(firstName, lastName)
        this.position = position;
    }
    printIfno() {
        console.log(this.firstName, this.lastName, this.position);

    }

}


let myPerson = new Person('dako', 'grigorov')
let fullInfo = new Employee('dako', 'grigorov', 'teacher')

myPerson.sayHello()
fullInfo.printIfno()



