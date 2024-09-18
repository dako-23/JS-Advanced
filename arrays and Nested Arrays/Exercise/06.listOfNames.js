function solve(arr) {

    // let total = arr.length

    arr.sort((a, b) => a.localeCompare(b))

    return arr.forEach((el, i) => console.log(`${i + 1}.${el}`)
    )

}
solve(["John", "Bob", "Christina", "Ema"]);