function solve(data) {

    const store = {};

    for (const el of data) {

        let [key, value] = el.split(' : ')
        value = Number(value);

        store[key] = value

    }

    let sortedRes = Object.entries(store).sort((arrA, arrB) => arrA[0].localeCompare(arrB[0]))
    let firstChar = ''

    for (let [key, value] of sortedRes) {
        if (firstChar !== key[0]) {
            firstChar = key[0]
            console.log(firstChar);
        }
        console.log(`  ${key}: ${value}`);

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