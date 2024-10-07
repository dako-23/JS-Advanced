function solve(arr) {

    let result = [];
    arr.sort((a, b) => a - b)

    let index = 0;

    while (arr.length !== 0) {
        if (index % 2 === 0) {
            result.push(arr.shift())
        } else {
            result.push(arr.pop())
        }

        index++
    }

    return result;







}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);