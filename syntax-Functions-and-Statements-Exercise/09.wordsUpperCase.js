function solve(str) {

    return str.split(/[^A-Za-z0-9]+/gm).join(' ').trim().split(' ').join(', ').toUpperCase()




}
console.log(solve('Hi, how are you?'));
