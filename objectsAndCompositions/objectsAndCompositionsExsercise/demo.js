function findLowestPrices(data) {
    const products = {};

    data.forEach(entry => {
        const [town, product, price] = entry.split(' | ');
        const productPrice = Number(price);

        // Ако продуктът не е в речника или е намерена по-ниска цена, обновяваме
        if (!products[product] || productPrice < products[product].price) {
            products[product] = { town, price: productPrice };
        }
    });

    // Принтираме резултата в желания формат
    for (const product in products) {
        const { town, price } = products[product];
        console.log(`${product} -> ${price} (${town})`);
    }
}

// Примерен вход
const input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];

findLowestPrices(input);
