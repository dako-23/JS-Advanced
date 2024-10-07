function solve() {

    const person1 = {
        name: 'emo',
        surname: 'iordanov',

        full: function () {
            console.log(this.name + ' ' + this.surname);

        }
    }

    const person2 = {
        name: 'dani',
        surname: 'ings'
    }
    person1.full.call(person2)



}
solve()
