function solve(arr) {

    const result = [];


    for (const el of arr) {

        const tokens = el.split(' / ')
        let [name, level, items] = tokens
        level = Number(level)
        items = items ? items.split(', ') : [];

        if (name, level, items) {
            result.push({ name, level, items })
        }

    }

    console.log(JSON.stringify(result))









}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])