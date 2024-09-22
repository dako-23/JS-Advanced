function solve(arr) {

    const result = {};
    // let cal = [];

    for (let i = 0; i < arr.length; i += 2) {
        const key = arr[i]
        const value = Number(arr[i + 1])

        result[key] = value

    }








    console.log(result);





}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);