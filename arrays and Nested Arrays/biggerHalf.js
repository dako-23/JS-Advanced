function solve(arr) {

    arr.sort((a, b) => a - b)

    const newArr = arr.slice(Math.floor(arr.length / 2))

    return newArr









}
console.log(solve([3, 19, 14, 7, 2, 19, 6]));