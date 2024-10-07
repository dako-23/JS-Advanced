function solve(...argument) {

    // const arg = typeof argument

    const tally = {};

    argument.forEach((arg) => {
        const type = typeof arg

        console.log(`${type}: ${arg}`);

        if (!tally.hasOwnProperty(type)) {
            tally[type] = 0;
        }

        tally[type] += 1;

    })

    Object.entries(tally).sort((a, b) => b[1] - a[1]).forEach((e) => {
        console.log(`${e[0]} = ${e[1]}`);
    })





}
solve('cat', 42, 66, function () { console.log('Hello world!'); })