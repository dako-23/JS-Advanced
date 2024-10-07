function solve(arr, n) {

    let result = [];

    for (let i = 0; i < arr.length; i += n) {
        const element = arr[i];

        result.push(element)


    }

    return result




}
solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2);
