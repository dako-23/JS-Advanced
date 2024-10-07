function solve(arr) {


    let initialNum = 1;
    let result = []

    for (const el of arr) {

        if (el === 'add') {
            result.push(initialNum)

        } else {
            result.pop(initialNum)

        }
        initialNum++
    }

    if (result.length < 1) {
        console.log('Empty');
        return
    }
    console.log(result.join('\n'));


    // console.log(result);





}
solve(['add',
    'add',
    'remove',
    'add',
    'add']
)