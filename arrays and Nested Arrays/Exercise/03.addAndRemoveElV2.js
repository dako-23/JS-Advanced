function solve(arr) {

    let initialNum = 1;
    let result = []

    arr.forEach(command => {
        command === 'add' ? result.push(initialNum) : result.pop();
        initialNum++
    })

    result.length ? console.log(result.join('\n')) : console.log('Empty');









}
solve(['add',
    'add',
    'remove',
    'add',
    'add']
)