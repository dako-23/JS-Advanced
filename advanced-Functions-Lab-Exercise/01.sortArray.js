function solve(arr, arg) {

    const result = arr.sort((a, b) => a - b);

    if (arg === 'desc') {
        result.reverse()
    }

    return result;


}
solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');