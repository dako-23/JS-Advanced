function solve(arr) {

    let buffer = arr.shift();
    let resultArr = []
    resultArr.push(buffer)



    for (const el of arr) {

        if (el >= buffer) {
            resultArr.push(el)
            buffer = el
        }

    }

    return resultArr



}
solve([20,
    3,
    2,
    15,
    6,
    1])