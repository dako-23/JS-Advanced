function solve(arr) {

    let store = {};

    for (const el of arr) {

        let [brand, key, value] = el.split(' | ')
        value = Number(value);

        const firstChar = key[0];

        if (!store.hasOwnProperty(firstChar)) {
            store[firstChar] = {};
        }

        store[firstChar][key] = value

    }


    console.log(store);







}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);