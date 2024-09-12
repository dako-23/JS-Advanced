function sameNumbers(num) {

    let sum = 0;
    let isSame = true;

    num.toString().split('').map(Number).forEach((x, i, el) => {

        if (x !== el[0]) {
            isSame = false;
        }

        sum += x
    });

    console.log(isSame);
    console.log(sum);

}
sameNumbers(2222222);