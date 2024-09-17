function solve(arr) {

    return arr.filter((x, i) => i % 2 === 1).map(a => a * 2).reverse().join(' ')


}
console.log(solve([10, 15, 20, 25]));
