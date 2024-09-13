function solve(num, arg1, arg2, arg3, arg4, arg5) {

    let myNum = Number(num)
    let arr = [arg1, arg2, arg3, arg4, arg5]


    for (const el of arr) {

        switch (el) {
            case 'chop':
                myNum = myNum / 2
                console.log(myNum);

                break;
            case 'dice':
                myNum = Math.sqrt(myNum)
                console.log(myNum);
                break;
            case 'spice':
                myNum += 1
                console.log(myNum);
                break;
            case 'bake':
                myNum = myNum * 3
                console.log(myNum);
                break;
            case 'fillet':
                myNum *= 0.8
                console.log(myNum.toFixed(1));
                break;
        }


    }




}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
