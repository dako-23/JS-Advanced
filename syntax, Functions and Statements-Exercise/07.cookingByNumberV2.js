function solve(num, arg1, arg2, arg3, arg4, arg5) {

    let myNum = Number(num)
    let arr = [arg1, arg2, arg3, arg4, arg5]
    // console.log(num);

    const operObj = {
        'chop': (a) => {
            let res = a / 2
            console.log(res);
            return res;
        },

        'dice': (a) => {
            let res = Math.sqrt(a)
            console.log(res);
            return res;
        },
        'spice': (a) => {
            let res = a + 1
            console.log(res);
            return res;
        },
        'bake': (a) => {
            let res = a * 3
            console.log(res);
            return res;
        },
        'fillet': (a) => {
            let res = a * 0.8
            console.log(res);
            return res;
        }

    }

arr.forEach(oper => {
    
    myNum = operObj[oper](myNum);
    
});







}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
