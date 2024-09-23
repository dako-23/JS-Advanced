function solve(arr) {

    const result = {};

    for (const el of arr) {

        const tokens = el.split(' | ');

        let [town, product, price] = tokens
        price = Number(price);

        // result.push({ town, product, price })

        if (!result[product] || price < result[product].price) {
            result[product] = { town, price };
        }

    }


    // let sortedResult = result.sort((a, b) => a.price - b.price).sort()

    // for (const el of sortedResult) {
    //     console.log(el);
    // }

    // if (!result[product] || productPrice < result[product].price) {
    //     result[product] = { town, price: productPrice };
    // }

    for (const product in result) {
        const { town, price } = result[product];
        console.log(`${product} -> ${price} (${town})`);
        

    }














}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);