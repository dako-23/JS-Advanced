function solve(data) {

    const store = {};

    for (const el of data) {

        let [key, value] = el.split(' : ')
        value = Number(value);

        const firstChar = key[0];

        if (!store.hasOwnProperty(firstChar)) {
            store[firstChar] = {};
        }

        store[firstChar][key] = value

    }

    let sortedArr = Object.entries(store).sort((arrA, arrB) => arrA[0].localeCompare(arrB[0]))


    for (let [key, objArr] of sortedArr) {
        console.log(key);
        Object.entries(objArr).sort((arrA, arrB) => arrA[0].localeCompare(arrB[0])).forEach(el => {
            console.log(`  ${el[0]}: ${el[1]}`);

        })


    }

}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']

)