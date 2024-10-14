function solve(input) {

    const flavour = new Map
    const juiceBottles = new Map

    for (const el of input) {

        const [juice, qty] = el.split(' => ')

        if (!flavour.has(juice)) {
            flavour.set(juice, 0)
        };

        flavour.set(juice, flavour.get + Number(qty))

        if (flavour.get(juice) >= 1000) {
            const juiceBottle = parseInt(juice.get(juice) / 1000);

            if (!juiceBottles.has(juice)) {
                juiceBottles.set(juice, 0)
            }

            juiceBottles.set(juice)
        }




    }










}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])