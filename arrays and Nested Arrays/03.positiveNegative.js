function solve(arr) {

    let result = []

    for (const el of arr) {

        if (el >= 0) {
            result.push(el)
        } else {
            result.unshift(el)
        }

    }


    console.log(result);







}
console.log(solve(['10', '15', '-1', '0', '20']));
