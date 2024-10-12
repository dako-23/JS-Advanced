

function solve(arr) {

    let store = {};

    for (const el of arr) {

        let [brand, key, value] = el.split(' | ')
        value = Number(value);

        if (!store.hasOwnProperty(brand)) {
            store[brand] = {};
        }

        store[brand][key] = value



    }

    Object.entries(store).map((el) => {

        const [key, value] = el

        console.log(key);

        for (data in value) {

            console.log(data, value[data]);

        }

    })



}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X5 | 1',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);