function solve(arr) {

    let result = {};

    for (const el of arr) {

        const entries = el.split(' <-> ');
        const [town, population] = entries

        if (!result.hasOwnProperty(town)) {
            result[town] = 0
        }

        result[town] += Number(population);

    }


    console.log(Object.entries(result).map(([k, v]) => `${k} : ${v}`).join("\n"));




}
// solve(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])