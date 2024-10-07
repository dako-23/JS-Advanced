function solve(arr) {

    let startNum = Number.MIN_SAFE_INTEGER;


    return arr.reduce((acc, el) => {

        if(el >= startNum ){
            acc.push(el)
            startNum = el
        }
        return acc


    },[])
}
console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))